export interface ISocialLinks {
  [key: string]: string;
}

export interface ILink {
  title: string;
  path: string;
}

export interface ILinkSocial extends ILink {
  target: string;
  rel: string;
}

export interface IConstants {
  'The Fun Stuff': ILink[];
  'Things to Know': ILink[];
  'Legal Note': ILink[];
}

export interface IProps {
  header: string;
  list: ILink[];
}
