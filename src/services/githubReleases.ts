import { GitHubRelease, ProcessedRelease, GitHubAsset } from '../types.ts';

const PRIMARY_REPO = 'ashishdas9077-cmd/LocalRide-Download';
const FALLBACK_REPO = 'ashishdas9077/LocalRide-Download';

const CACHE_KEY = 'localride_releases_cache_v1';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function formatDate(isoString: string): { formattedDate: string; formattedTime: string; relativeTime: string } {
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return { formattedDate: 'Unknown date', formattedTime: '', relativeTime: '' };
    }

    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    // Approximate relative time
    const diffMs = Date.now() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let relativeTime = 'recently';
    if (diffDays === 0) relativeTime = 'today';
    else if (diffDays === 1) relativeTime = 'yesterday';
    else if (diffDays < 30) relativeTime = `${diffDays} days ago`;
    else if (diffDays < 365) relativeTime = `${Math.floor(diffDays / 30)} months ago`;
    else relativeTime = `${Math.floor(diffDays / 365)} years ago`;

    return { formattedDate, formattedTime, relativeTime };
  } catch {
    return { formattedDate: 'Unknown date', formattedTime: '', relativeTime: '' };
  }
}

export function processRelease(release: GitHubRelease, isLatestStable: boolean): ProcessedRelease {
  // Look for asset named exactly 'LocalRide.apk', fallback to case-insensitive match or any .apk
  const apkAsset =
    release.assets.find((asset: GitHubAsset) => asset.name === 'LocalRide.apk') ||
    release.assets.find((asset: GitHubAsset) => asset.name.toLowerCase() === 'localride.apk') ||
    release.assets.find((asset: GitHubAsset) => asset.name.toLowerCase().endsWith('.apk')) ||
    null;

  const { formattedDate, formattedTime, relativeTime } = formatDate(release.published_at || release.created_at);

  return {
    id: release.id,
    tag: release.tag_name,
    title: release.name || release.tag_name,
    publishedAt: release.published_at || release.created_at,
    formattedDate,
    formattedTime,
    relativeTime,
    body: release.body?.trim() || 'No release notes provided for this version.',
    isPrerelease: release.prerelease,
    isLatest: isLatestStable,
    apkAsset,
    fileSizeMb: apkAsset ? formatBytes(apkAsset.size) : null,
    downloadUrl: apkAsset ? apkAsset.browser_download_url : null,
    htmlUrl: release.html_url,
  };
}

export interface FetchReleasesResult {
  releases: ProcessedRelease[];
  sourceRepo: string;
  error: string | null;
  isRateLimited: boolean;
}

function getCachedReleases(): FetchReleasesResult | null {
  try {
    if (typeof window === 'undefined' || !window.sessionStorage) return null;
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.timestamp || !parsed.data) return null;

    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
      window.sessionStorage.removeItem(CACHE_KEY);
      return null;
    }
    return parsed.data as FetchReleasesResult;
  } catch {
    return null;
  }
}

function setCachedReleases(data: FetchReleasesResult): void {
  try {
    // Only cache successful responses (no temporary network/rate-limit errors)
    if (typeof window === 'undefined' || !window.sessionStorage) return;
    if (data.error !== null || data.isRateLimited) return;

    window.sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data,
      })
    );
  } catch {
    // Ignore storage quota or cross-origin iframe security exceptions
  }
}

export async function fetchGitHubReleases(forceRefresh = false): Promise<FetchReleasesResult> {
  // Check sessionStorage cache unless explicit refresh requested
  if (!forceRefresh) {
    const cached = getCachedReleases();
    if (cached) {
      return cached;
    }
  }

  const reposToTry = [PRIMARY_REPO, FALLBACK_REPO];
  let rateLimitEncountered = false;
  let emptyValidRepo = '';

  for (const repo of reposToTry) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}/releases`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (response.status === 403) {
        const remaining = response.headers.get('x-ratelimit-remaining');
        if (remaining === '0') {
          rateLimitEncountered = true;
          continue; // Try fallback in case it's reachable or continue loop
        }
      }

      if (response.status === 404) {
        // Repository not found, try fallback
        continue;
      }

      if (!response.ok) {
        continue;
      }

      const rawData = (await response.json()) as GitHubRelease[];
      if (!Array.isArray(rawData)) {
        continue;
      }

      // Filter out drafts and sort by date descending
      const validReleases = rawData.filter((r) => !r.draft);

      // If this repository exists but has zero published releases, record it and check fallback
      if (validReleases.length === 0) {
        if (!emptyValidRepo) {
          emptyValidRepo = repo;
        }
        continue;
      }

      validReleases.sort(
        (a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime()
      );

      // Identify the latest stable release (first non-prerelease)
      const firstStableIndex = validReleases.findIndex((r) => !r.prerelease);
      const latestStableId = firstStableIndex !== -1 ? validReleases[firstStableIndex].id : validReleases[0]?.id;

      const processed = validReleases.map((r) => processRelease(r, r.id === latestStableId));

      const result: FetchReleasesResult = {
        releases: processed,
        sourceRepo: repo,
        error: null,
        isRateLimited: false,
      };

      setCachedReleases(result);
      return result;
    } catch (err) {
      console.error(`Failed to fetch releases from ${repo}:`, err);
    }
  }

  // If a repository exists with 0 releases, return genuine empty state for that repo
  if (emptyValidRepo) {
    const emptyResult: FetchReleasesResult = {
      releases: [],
      sourceRepo: emptyValidRepo,
      error: null,
      isRateLimited: false,
    };
    setCachedReleases(emptyResult);
    return emptyResult;
  }

  // If rate limit was encountered
  if (rateLimitEncountered) {
    return {
      releases: [],
      sourceRepo: PRIMARY_REPO,
      error: 'GitHub API rate limit reached (60 requests/hour for unauthenticated users). Please retry in a few minutes or browse releases directly on GitHub.',
      isRateLimited: true,
    };
  }

  // If neither repository could be reached
  return {
    releases: [],
    sourceRepo: PRIMARY_REPO,
    error: 'Unable to reach the GitHub Releases API. Please check your internet connection or browse releases directly on GitHub.',
    isRateLimited: false,
  };
}
