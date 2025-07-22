import { PostHog } from 'posthog-node';

let posthogClient: PostHog | null = null;

export default function PostHogClient() {
  if (!posthogClient) {
    posthogClient = new PostHog(import.meta.env.PUBLIC_POSTHOG_KEY, {
      host: import.meta.env.PUBLIC_POSTHOG_HOST,
    });
  }

  return posthogClient;
}
