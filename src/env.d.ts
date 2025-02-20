/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PINNED_REPOS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
