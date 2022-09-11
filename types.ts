export interface GitHubPinnedReposType {
  user: User;
}

export interface User {
  pinnedItems: PinnedItems;
}

export interface PinnedItems {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  name: string;
  id: string;
  url: string;
  description: string;
  homepageUrl: string;
  openGraphImageUrl: string;
}
