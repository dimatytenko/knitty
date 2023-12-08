import React from 'react';

import { constatnts, socialLinks } from './constants';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { FooterLink } from '../../ui-kit/Links';
import { Text3Bold } from '../../ui-kit/Typography';
import {
  StyledFooter,
  Container,
  FooterContent,
  LinksBlockWrapper,
  LeftBlock,
  RightBlock,
  RightBlockTop,
  RightBlockBottom,
  FooterList,
} from './styles';
import { IProps } from './types';
import { IFooterComponentProps } from '../../types/layout';

export const LinksBlock = ({ header, list }: IProps) => {
  return (
    <LinksBlockWrapper>
      <Text3Bold $case="uppercase">{header}</Text3Bold>
      <FooterList>
        {list.map(({ title, path, ...rest }) => (
          <li key={title}>
            <FooterLink to={path} {...rest}>
              {title}
            </FooterLink>
          </li>
        ))}
      </FooterList>
    </LinksBlockWrapper>
  );
};

export const FooterComponent: React.FC<IFooterComponentProps> = ({ year }) => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
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
              <LinksBlock header="SOCIAL" list={socialLinks} />
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
              <Text3Bold $case="uppercase">
                © {year} all rights reserved
              </Text3Bold>
              <Text3Bold $case="uppercase">
                [All photos are used for non-commercial purposes]
              </Text3Bold>
            </RightBlockBottom>
          </RightBlock>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
