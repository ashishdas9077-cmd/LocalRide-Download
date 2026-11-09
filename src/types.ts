export interface GitHubAsset {
  id: number;
  name: string;
  size: number;
  download_count: number;
  browser_download_url: string;
  created_at: string;
  updated_at: string;
  content_type: string;
}

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string;
  created_at: string;
  prerelease: boolean;
  draft: boolean;
  html_url: string;
  assets: GitHubAsset[];
}

export interface ProcessedRelease {
  id: number;
  tag: string;
  title: string;
  publishedAt: string;
  formattedDate: string;
  formattedTime: string;
  relativeTime: string;
  body: string;
  isPrerelease: boolean;
  isLatest: boolean;
  apkAsset: GitHubAsset | null;
  fileSizeMb: string | null;
  downloadUrl: string | null;
  htmlUrl: string;
}
