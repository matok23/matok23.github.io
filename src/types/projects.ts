export type ProjectSection = {
  title: string;
  description: string;
  github: string;
};

export type Project = {
  name: string;
  description: string;
  github: string;
  sections: ProjectSection[];
};