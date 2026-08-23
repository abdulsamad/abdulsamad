/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />
/// <reference path=".astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GITHUB_ACCESS_TOKEN: string;
  readonly PINNED_REPOS_API: string;
  readonly PUBLIC_POSTHOG_HOST: string;
  readonly PUBLIC_POSTHOG_KEY: string;
  readonly POSTHOG_UPSTREAM_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace Cloudflare {
  interface Env {
    POSTHOG_UPSTREAM_HOST?: string;
  }
}
