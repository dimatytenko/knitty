import React from 'react';

import { IconSvg } from '../../ui-kit/Icon/Svg';
import { Text3Bold } from '../../ui-kit/Typography';
import {
  StyledFooter,
  Container,
  FooterContent,
  LeftBlock,
  RightBlock,
  RightBlockTop,
  RightBlockBottom,
} from './styles';
import { IFooterComponentProps } from '../../types/layout';
import { useTranslation } from 'react-i18next';
import { LinksBlock } from './LinksBlock';
import useStatic from './useStatic';



export const FooterComponent: React.FC<IFooterComponentProps> = ({ year }) => {
  const { t } = useTranslation();
  const { constants, socialLinks } = useStatic();
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
              <LinksBlock header={t('footer.SOCIAL')} list={socialLinks} />
              <LinksBlock
                header={t('footer.The Fun Stuff')}
                list={constants['The Fun Stuff']}
              />
              <LinksBlock
                header={t('footer.Things to Know')}
                list={constants['Things to Know']}
              />
              <LinksBlock
                header={t('footer.Legal Note')}
                list={constants['Legal Note']}
              />
            </RightBlockTop>
            <RightBlockBottom>
              <Text3Bold $case="uppercase">
                © {year} {t('footer.all rights reserved')}
              </Text3Bold>
              <Text3Bold $case="uppercase">
                [{t('footer.ALL PHOTOS ARE USED FOR NON-COMMERCIAL PURPOSES')}]
              </Text3Bold>
            </RightBlockBottom>
          </RightBlock>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
