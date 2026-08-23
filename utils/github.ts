import { redirects } from './social-redirects';

export const githubProfileUrl = redirects['/github'].destination;
export const githubOwner = new URL(githubProfileUrl).pathname.split('/').filter(Boolean)[0];
export const githubApiBaseUrl = 'https://api.github.com';
export const githubUserAgent = 'portfolio-github-client';
