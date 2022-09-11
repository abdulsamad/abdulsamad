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
  repositoryTopics: RepositoryTopics;
}

export interface RepositoryTopics {
  edges: Edge2[];
}

export interface Edge2 {
  node: Node2;
}

export interface Node2 {
  topic: Topic;
}

export interface Topic {
  name: string;
}
