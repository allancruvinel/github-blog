export interface GithubIssue {
  id?: number;
  title?: string;
  body: string;
  html_url?: string;
  user: {
    login: string;
  };
  created_at: Date;
  comments: number;
  number: number;
}

export interface GithubUserProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
}
