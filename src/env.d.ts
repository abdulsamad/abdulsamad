/// <reference types="astro/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_HCAPTCHA_SITE_KEY: string;
  readonly HCAPTCHA_SITE_SECRET: string;
  readonly GITHUB_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
