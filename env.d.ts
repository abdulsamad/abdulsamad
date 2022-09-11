declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_HCAPTCHA_SITE_KEY: string;
    NEXT_PUBLIC_GITHUB_PROFILE_URL: string;
    NEXT_PUBLIC_LINKEDIN_URL: string;
    HCAPTCHA_SITE_SECRET: string;
    GITHUB_ACCESS_TOKEN: string;
  }
}

declare namespace Express {
  export interface Request {
    token: string;
  }
}
