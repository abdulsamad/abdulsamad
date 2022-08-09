declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_HCAPTCHA_SITE_KEY: string;
    HCAPTCHA_SITE_SECRET: string;
  }
}

declare namespace Express {
  export interface Request {
    token: string;
  }
}
