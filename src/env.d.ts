/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_HCAPTCHA_SITE_KEY: string;
  readonly HCAPTCHA_SITE_SECRET: string;
  readonly GITHUB_ACCESS_TOKEN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
