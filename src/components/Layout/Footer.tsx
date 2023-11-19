import { constatnts } from './constants';

import { IconSvg } from '../../ui-kit/Icon/Svg';
import { FooterLink } from '../../ui-kit/Links';
import { TextBody2Bold } from '../../ui-kit/Typography/styles';
import {
  StyledFooter,
  Container,
  LinksBlockWrapper,
  LeftBlock,
  RightBlock,
  RightBlockTop,
  RightBlockBottom,
} from './styles';
import { IProps } from './types';

export const LinksBlock = ({ header, list }: IProps) => {
  return (
    <LinksBlockWrapper>
      <TextBody2Bold as="h3">{header}</TextBody2Bold>
      <ul>
        {list.map(({ title, path }) => (
          <li key={title}>
            <FooterLink to={path}>{title}</FooterLink>
          </li>
        ))}
      </ul>
    </LinksBlockWrapper>
  );
};

export const FooterComponent = () => {
  return (
    <StyledFooter>
      <Container>
        <LeftBlock>
          <IconSvg
            type="logo-2"
            stroke="none"
            width="280"
            height="306"
            viewBox="0 0 280 306"
          />
        </LeftBlock>
        <RightBlock>
          <RightBlockTop>
            <LinksBlock header="SOCIAL" list={constatnts['SOCIAL']} />
            <LinksBlock
              header="The Fun Stuff"
              list={constatnts['The Fun Stuff']}
            />
            <LinksBlock
              header="Things to Know"
              list={constatnts['Things to Know']}
            />
            <LinksBlock header="Legal Note" list={constatnts['Legal Note']} />
          </RightBlockTop>
          <RightBlockBottom>
            <TextBody2Bold as="p">© 2023 all rights reserved</TextBody2Bold>
            <TextBody2Bold as="p">
              [All photos are used for non-commercial purposes]
            </TextBody2Bold>
          </RightBlockBottom>
        </RightBlock>
      </Container>
    </StyledFooter>
  );
};
