/// <reference types="astro/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_HCAPTCHA_SITE_KEY: string;
    HCAPTCHA_SITE_SECRET: string;
    GITHUB_ACCESS_TOKEN: string;
  }
}

declare namespace Express {
  export interface Request {
    token: string;
  }
}
