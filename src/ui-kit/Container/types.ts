import { WithChildren } from '../../types/helpers';

export enum POINTS {
  l = 1140, // 1080 + 30
  xl = 1360, // 1300 + 30
}

export interface IContainerProps extends WithChildren {
  point?: POINTS;
  style?: any;
}
