import { PostHog } from 'posthog-node';

let posthogClient = null;

export default function PostHogClient() {
  if (!posthogClient) {
    posthogClient = new PostHog(import.meta.env.PUBLIC_POSTHOG_KEY, {
      host: 'https://us.i.posthog.com',
    });
  }

  return posthogClient;
}
