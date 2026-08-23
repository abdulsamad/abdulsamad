/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />
/// <reference path=".astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_POSTHOG_KEY: string;
  readonly PUBLIC_POSTHOG_UI_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
