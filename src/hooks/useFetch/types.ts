import { AxiosResponse } from 'axios';

export interface IProps {
  fetch: () => Promise<AxiosResponse<any, any>>;
  globalStateKey?: string;
  cache?: boolean;
  noFetching?: boolean;
}
