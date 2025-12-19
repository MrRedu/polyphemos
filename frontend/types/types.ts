type Multimedia = {
  url: string;
  name: string;
  alternativeText: string;
  width: number;
  height: number;
};

export type Article = {
  slug: string;
  title: string;
  content: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  multimedia: Multimedia[];
};
