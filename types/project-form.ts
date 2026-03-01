export interface ProjectFormLink {
  type: string;
  url: string;
}

export interface ProjectFormImage {
  type: string;
  url: string;
}

export interface ProjectFormModel {
  name: string;
  description: string;
  links: ProjectFormLink[];
  technologies: string[];
  images: ProjectFormImage[];
}
