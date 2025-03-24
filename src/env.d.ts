/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GITHUB_ACCESS_TOKEN: string;
  readonly PINNED_REPOS_API: string;
  readonly PUBLIC_POSTHOG_HOST: string;
  readonly PUBLIC_POSTHOG_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
