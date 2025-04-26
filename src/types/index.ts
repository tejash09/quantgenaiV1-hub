
export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  url: string;
  topic: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  topic: string;
}

export interface FeedbackData {
  [key: string]: unknown;
  name: string;
  email: string;
  message: string;
}
