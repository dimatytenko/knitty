export interface IFaqItem {
  title: string;
  text: string;
}

export interface IFaqList {
  [key: string]: IFaqItem[];
}
