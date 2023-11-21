import { useEffect, useRef } from 'react';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { HeaderBlockComponent } from '../HeaderBlock';
import { HeaderBlockLeft } from '../HeaderBlocktLeft';
import { HeaderBlockRight } from '../HeaderBlocktRight';
import { listLeft, listRight } from './constants';
import { Container, StyledHeader, HeaderContent } from './styles';
import gsap from 'gsap';
import { MainLink } from '../../ui-kit/Links';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'styled-components';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const HeaderComponent = () => {
  const { pathname } = useLocation();
  const { palette } = useTheme();
  const refHeader = useRef(null);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    if (!refHeader.current) return;

    if (pathname === '/') {
      tl.current.to(refHeader.current, {
        scrollTrigger: {
          scrub: 1,
          trigger: 'body',
          start: 200,
          end: 800,
        },
        width: 950,
        backgroundColor: palette.colors.background,
        padding: '15px 0',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        boxShadow: `0px 10px 15px -3px rgba(0,0,0,0.1)`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <StyledHeader ref={refHeader}>
      <Container>
        <HeaderContent>
          <HeaderBlockComponent
            renderTop={<HeaderBlockLeft />}
            navList={listLeft}
          />
          <MainLink to="/">
            <IconSvg
              type="logo-knitty"
              stroke="none"
              width="170"
              height="66"
              viewBox="0 0 170 66"
            />
          </MainLink>
          <HeaderBlockComponent
            renderTop={<HeaderBlockRight />}
            navList={listRight}
          />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};
