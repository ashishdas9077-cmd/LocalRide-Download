import { GitHubRelease, ProcessedRelease, GitHubAsset } from '../types.ts';

const PRIMARY_REPO = 'ashishdas9077/LocalRide-Download';
const FALLBACK_REPO = 'ashishdas9077-cmd/LocalRide-Download';

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
  // Look for asset named exactly 'LocalRide.apk', fallback to case-insensitive match
  const apkAsset =
    release.assets.find((asset: GitHubAsset) => asset.name === 'LocalRide.apk') ||
    release.assets.find((asset: GitHubAsset) => asset.name.toLowerCase() === 'localride.apk') ||
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

export async function fetchGitHubReleases(): Promise<FetchReleasesResult> {
  const reposToTry = [PRIMARY_REPO, FALLBACK_REPO];

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
          return {
            releases: [],
            sourceRepo: repo,
            error: 'GitHub API rate limit exceeded for your IP. Please try again in a few minutes, or browse releases directly on GitHub.',
            isRateLimited: true,
          };
        }
      }

      if (response.status === 404) {
        // Try fallback repo if primary returned 404
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
      validReleases.sort(
        (a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime()
      );

      // Identify the latest stable release (first non-prerelease)
      const firstStableIndex = validReleases.findIndex((r) => !r.prerelease);
      const latestStableId = firstStableIndex !== -1 ? validReleases[firstStableIndex].id : validReleases[0]?.id;

      const processed = validReleases.map((r) => processRelease(r, r.id === latestStableId));

      return {
        releases: processed,
        sourceRepo: repo,
        error: null,
        isRateLimited: false,
      };
    } catch (err) {
      console.error(`Failed to fetch releases from ${repo}:`, err);
    }
  }

  // If both failed or are unreachable
  return {
    releases: [],
    sourceRepo: PRIMARY_REPO,
    error: 'Unable to reach the GitHub Releases API. Please check your internet connection or browse releases directly on GitHub.',
    isRateLimited: false,
  };
}
