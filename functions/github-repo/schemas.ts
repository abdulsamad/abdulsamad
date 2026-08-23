import { z } from 'zod';

export const GitHubRepositorySchema = z.object({
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.url(),
  homepage: z.union([z.url(), z.literal('')]).nullable(),
  default_branch: z.string(),
  topics: z.array(z.string()).default([]),
  language: z.string().nullable(),
});

export const RepositoryDetailsSchema = z.object({
  name: z.string(),
  fullName: z.string(),
  description: z.string(),
  url: z.url(),
  homepageUrl: z.union([z.url(), z.literal('')]),
  defaultBranch: z.string(),
  topics: z.array(z.string()),
  language: z.string(),
  readmeHtml: z.string(),
});

export const RepositoryDetailsFallbackSchema = z.object({
  repositories: z.record(z.string(), RepositoryDetailsSchema),
});
