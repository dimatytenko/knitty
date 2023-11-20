import { WithChildren } from '../types/helpers';

export interface IAppLayoutProps extends WithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export interface IFooterComponentProps {
  year: number;
}
