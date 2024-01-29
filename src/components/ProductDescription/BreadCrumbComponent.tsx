import { Text2Bold } from "../../ui-kit/Typography";
import { IProductDescrtiptionProps } from "./types";
import { StyledBreadCrumb } from "./styles";

export default function BreadCrumbComponent({ data }: IProductDescrtiptionProps) {
  const items = [
    {
      title: (
        <Text2Bold $case="uppercase" color="grey">
          {data?.category?.name}
        </Text2Bold>
      ),
    },
    {
      title: (
        <Text2Bold $case="uppercase" color="grey">
          {data?.filter?.name}
        </Text2Bold>
      ),
    },
  ];
  return <StyledBreadCrumb items={items} />;
}
