type Multimedia = {
  url: string;
  name: string;
  alternativeText: string;
  width: number;
  height: number;
};

export type Article = {
  // id: string;
  title: string;
  content: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  // url: string;
  multimedia: Multimedia[];
  tags: string;
};
