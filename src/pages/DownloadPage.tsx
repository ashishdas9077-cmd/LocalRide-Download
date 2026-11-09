import React, { useState, useEffect } from 'react';
import { Download, AlertCircle, RefreshCw, CheckCircle2, Smartphone, FileText, ChevronDown, ChevronUp, ExternalLink, ShieldAlert } from 'lucide-react';
import { fetchGitHubReleases, FetchReleasesResult } from '../services/githubReleases.ts';
import { ProcessedRelease } from '../types.ts';

export const DownloadPage: React.FC = () => {
  const [data, setData] = useState<FetchReleasesResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedNotes, setExpandedNotes] = useState<Record<number, boolean>>({});

  const loadReleases = async () => {
    setLoading(true);
    try {
      const res = await fetchGitHubReleases();
      setData(res);
    } catch {
      setData({
        releases: [],
        sourceRepo: 'ashishdas9077/LocalRide-Download',
        error: 'An unexpected network error occurred while querying GitHub Releases.',
        isRateLimited: false,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReleases();
  }, []);

  const toggleNotes = (id: number) => {
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const latestRelease = data?.releases.find((r) => r.isLatest) || data?.releases[0] || null;
  const olderReleases = data?.releases.filter((r) => r !== latestRelease) || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Android Application (.apk)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Download LocalRide
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          LocalRide is distributed as an Android APK directly through public GitHub Releases. Test the latest builds or access past release versions below.
        </p>
      </div>

      {/* 2. Loading State */}
      {loading && (
        <div className="space-y-6">
          <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm animate-pulse space-y-4">
            <div className="h-6 bg-slate-200 rounded w-1/4"></div>
            <div className="h-4 bg-slate-100 rounded w-1/2"></div>
            <div className="h-10 bg-blue-100 rounded-lg w-48 mt-4"></div>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 animate-pulse">
            <div className="h-5 bg-slate-200 rounded w-1/3"></div>
            <div className="h-4 bg-slate-100 rounded w-3/4"></div>
          </div>
        </div>
      )}

      {/* 3. Error State */}
      {!loading && data?.error && (
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-base text-amber-950">Notice Regarding GitHub Releases</h3>
              <p className="text-sm text-amber-800 leading-relaxed">{data.error}</p>
              {data.isRateLimited && (
                <p className="text-xs text-amber-700 mt-2">
                  Tip: GitHub limits unauthenticated API requests to 60 per hour per IP address. You can visit the official GitHub repository releases directly to download without waiting.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={loadReleases}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-200/80 hover:bg-amber-200 rounded-lg transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Fetching Releases</span>
            </button>
            <a
              href="https://github.com/ashishdas9077-cmd/LocalRide-Download/releases"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>View GitHub Releases Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* 4. Empty State: No Releases Published Yet */}
      {!loading && !data?.error && data?.releases.length === 0 && (
        <div className="p-8 sm:p-12 text-center rounded-2xl border border-slate-200 bg-white shadow-sm space-y-5">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Download className="w-7 h-7" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900">No Published Releases Found Yet</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Releases published to the public GitHub repository (<span className="font-mono text-xs text-slate-800">ashishdas9077-cmd/LocalRide-Download</span>) with an attached <span className="font-mono text-xs font-semibold text-blue-600">LocalRide.apk</span> file will appear here automatically.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-lg mx-auto text-left text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-800">Expected Release Setup in GitHub:</p>
            <ol className="list-decimal list-inside space-y-1 text-slate-600">
              <li>Release created under <span className="font-mono text-slate-800">ashishdas9077-cmd/LocalRide-Download</span></li>
              <li>Version tag added (e.g. <span className="font-mono text-slate-800">v1.0.0</span>)</li>
              <li>Asset uploaded with exact filename: <span className="font-mono font-semibold text-blue-700">LocalRide.apk</span></li>
            </ol>
          </div>
          <div>
            <button
              onClick={loadReleases}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Release Status</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. Latest Release Section (when releases exist) */}
      {!loading && latestRelease && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Latest Published Version</span>
              {latestRelease.isPrerelease ? (
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Prerelease / Beta
                </span>
              ) : (
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Stable Release
                </span>
              )}
            </h2>
            <button
              onClick={loadReleases}
              title="Refresh releases from GitHub"
              className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Refresh</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-blue-600/30 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                    {latestRelease.tag}
                  </h3>
                  {latestRelease.title !== latestRelease.tag && (
                    <span className="text-sm font-semibold text-slate-600">
                      {latestRelease.title}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                  <span>Published {latestRelease.formattedDate}</span>
                  {latestRelease.formattedTime && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{latestRelease.formattedTime}</span>
                    </>
                  )}
                  {latestRelease.fileSizeMb && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-slate-700">{latestRelease.fileSizeMb}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Download Button for Latest */}
              <div>
                {latestRelease.downloadUrl ? (
                  <a
                    href={latestRelease.downloadUrl}
                    download="LocalRide.apk"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md transition-all w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download LocalRide.apk</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-500 text-sm font-medium">
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                    <span>APK not available for this release</span>
                  </div>
                )}
              </div>
            </div>

            {/* Release Notes */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>What's New / Release Notes</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed font-sans max-h-48 overflow-y-auto">
                {latestRelease.body}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span>Direct binary source: GitHub Releases</span>
              <a
                href={latestRelease.htmlUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-blue-600 inline-flex items-center gap-1 font-medium"
              >
                <span>View Release on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 6. Version History Section (ALL older releases) */}
      {!loading && olderReleases.length > 0 && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Version History ({olderReleases.length} previous {olderReleases.length === 1 ? 'version' : 'versions'})
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> Older versions may not include the latest features, compatibility improvements or security updates. We advise using the latest release unless testing compatibility on legacy devices.
            </p>
          </div>

          <div className="space-y-3">
            {olderReleases.map((rel: ProcessedRelease) => {
              const isExpanded = !!expandedNotes[rel.id];
              return (
                <div
                  key={rel.id}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-base text-slate-900">{rel.tag}</span>
                        {rel.title !== rel.tag && (
                          <span className="text-xs font-medium text-slate-600">{rel.title}</span>
                        )}
                        {rel.isPrerelease && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                            Prerelease
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{rel.formattedDate}</span>
                        {rel.fileSizeMb && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{rel.fileSizeMb}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleNotes(rel.id)}
                        className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <span>Notes</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {rel.downloadUrl ? (
                        <a
                          href={rel.downloadUrl}
                          download="LocalRide.apk"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all whitespace-nowrap"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download APK</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 bg-slate-100 px-3 py-2 rounded-lg">
                          APK not available
                        </span>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100">
                      <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 font-sans whitespace-pre-line leading-relaxed">
                        {rel.body}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 7. Step-by-Step Android Installation Guide */}
      <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            How to Install the APK on Android
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Because LocalRide is installed directly from the APK file rather than Google Play, your device will require a one-time permission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase">Step 1</span>
            <h3 className="font-bold text-sm text-slate-900">Download APK</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Click the Download button above to save <span className="font-mono text-slate-800">LocalRide.apk</span> to your Android device.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase">Step 2</span>
            <h3 className="font-bold text-sm text-slate-900">Open Downloads</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pull down your notification shade or open your browser's Downloads folder, then tap the downloaded file.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase">Step 3</span>
            <h3 className="font-bold text-sm text-slate-900">Allow Install</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If prompted, tap <span className="font-medium text-slate-800">Settings</span> and toggle <span className="font-medium text-slate-800">"Allow from this source"</span> for your browser or file manager.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase">Step 4</span>
            <h3 className="font-bold text-sm text-slate-900">Launch & Test</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tap <span className="font-medium text-slate-800">Install</span>. Once finished, open LocalRide from your app drawer.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-900 leading-relaxed">
            <strong>Security Guarantee:</strong> LocalRide APK packages originate exclusively from the official public GitHub Releases repository (<span className="font-mono text-blue-950">ashishdas9077-cmd/LocalRide-Download</span>). Never download APKs from third-party mirrors.
          </p>
        </div>
      </section>

    </div>
  );
};
