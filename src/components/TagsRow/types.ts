import { FiltersType } from "../../context/GlobalStore/types";

export interface IProps {
  activeFilter: number;

  filters: FiltersType[];
  loading: boolean;
}