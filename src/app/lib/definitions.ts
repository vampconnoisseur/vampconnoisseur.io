export type NavLinkProps = {
  href: string;
  title: string;
};

export type Project = {
  projectName: string;
  description: string;
  image: string;
  techStack: string[];
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
