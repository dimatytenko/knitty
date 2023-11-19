export interface ISocialLinks {
  [key: string]: string;
}

export interface ILink {
  title: string;
  path: string;
}

export interface IConstants {
  SOCIAL: ILink[];
  'The Fun Stuff': ILink[];
  'Things to Know': ILink[];
  'Legal Note': ILink[];
}

export interface IProps {
  header: string;
  list: ILink[];
}
