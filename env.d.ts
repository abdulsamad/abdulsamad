/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly HCAPTCHA_SITE_SECRET: string;
    readonly GITHUB_ACCESS_TOKEN: string;
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_HCAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
