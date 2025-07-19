import { PostHog } from 'posthog-node';

let posthogClient = null;

export default function PostHogClient() {
  if (!posthogClient) {
    posthogClient = new PostHog(import.meta.env.PUBLIC_POSTHOG_KEY, {
      host: import.meta.env.PUBLIC_POSTHOG_HOST,
      ui_host: 'https://us.posthog.com',
    });
  }

  return posthogClient;
}
