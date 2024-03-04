export type NavLinkProps = {
  href: string;
  title: string;
};

export type Project = {
  projectname: string;
  description: string;
  images: string[];
  techstack: string[];
  github: string;
};

export type SocialLink = {
  name: string;
  link: string;
  icon: string;
};

export type Skill = {
  title: string;
  icon: string;
  style?: object;
};
