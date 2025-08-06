/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GITHUB_ACCESS_TOKEN: string;
  readonly PINNED_REPOS_API: string;
  readonly PUBLIC_POSTHOG_HOST: string;
  readonly PUBLIC_POSTHOG_KEY: string;
  readonly PUBLIC_POSTHOG_UI_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
