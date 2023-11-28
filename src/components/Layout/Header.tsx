import { useEffect, useRef, useContext } from 'react';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { HeaderBlockComponent } from '../HeaderBlock';
import { HeaderBlockTopLeft } from '../HeaderBlock/HeaderBlockToptLeft';
import { HeaderBlockTopRight } from '../HeaderBlock/HeaderBlocktTopRight';
import { Container, StyledHeader, HeaderContent } from './styles';
import gsap from 'gsap';
import { MainLink } from '../../ui-kit/Links';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HeaderBlockBottomLeft } from '../HeaderBlock/HeaderBlockBottomLeft';
import { HeaderBlockBottomRight } from '../HeaderBlock/HeaderBlockBottomRight';
import { GlobalStore } from '../../context/GlobalStore';

gsap.registerPlugin(ScrollTrigger);

export const HeaderComponent = () => {
  const { pathname } = useLocation();
  const { palette } = useTheme();
  const refHeader = useRef(null);
  const { cartList, favList, setData } = useContext(GlobalStore)!;

  useEffect(() => {
    if (!refHeader.current) return;
    ScrollTrigger.enable();

    if (pathname === '/') {
      gsap.set(refHeader.current, { position: 'fixed' });

      gsap.to(refHeader.current, {
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
      return;
    }
    gsap.set(refHeader.current, {
      position: 'relative',
    });
    ScrollTrigger.disable();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <StyledHeader ref={refHeader}>
      <Container>
        <HeaderContent>
          <HeaderBlockComponent
            renderTop={<HeaderBlockTopLeft />}
            renderBottom={<HeaderBlockBottomLeft />}
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
            renderTop={<HeaderBlockTopRight />}
            renderBottom={
              <HeaderBlockBottomRight
                cartList={cartList}
                favList={favList}
                setData={setData}
              />
            }
          />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};
