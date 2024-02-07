import { FooterLink } from "../../ui-kit/Links";
import { Text3Bold } from "../../ui-kit/Typography";
import { FooterList, LinksBlockWrapper } from "./styles";
import { IProps } from "./types";

export const LinksBlock = ({ header, list }: IProps) => {
  return (
    <LinksBlockWrapper>
      <Text3Bold $case="uppercase">{header}</Text3Bold>
      <FooterList>
        {list.map(({ title, path, href, ...rest }) => (
          <li key={title}>
            <FooterLink to={path} href={href} target="_blank" {...rest}>
              {title}
            </FooterLink>
          </li>
        ))}
      </FooterList>
    </LinksBlockWrapper>
  );
};
