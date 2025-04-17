export enum ResourceType {
  Book = 'Book',
  Course = 'Course',
  Tutorial = 'Tutorial',
  Article = 'Article',
  Video = 'Video'
}

export type Topic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  overview: string;
  keypoints: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  c1: string;
  c2: string;
  applications: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  a5: string;
  a6: string;
  a7: string;
  shortDescription: string;
  videoUrl: string;
  image: string;
  papers: Paper[];
  resources: Resource[];
  videoTutorials: VideoTutorial[];
};

export type Paper = {
  id: string;
  title: string;
  authors: string;
  year: string;
  link: string;
  abstract: string;
};

export type Resource = {
  id: string;
  title: string;
  type: ResourceType;
  link: string;
  description: string;
};

export type VideoTutorial = {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}; 