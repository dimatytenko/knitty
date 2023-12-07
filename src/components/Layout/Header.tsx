import { useEffect, useRef, useContext } from 'react';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { HeaderBlockComponent } from '../HeaderBlock';
import { HeaderBlockTopLeft } from '../HeaderBlock/HeaderBlockToptLeft';
import { HeaderBlockTopRight } from '../HeaderBlock/HeaderBlocktTopRight';
import { Container, StyledHeader, StyledHeaderContent } from './styles';
import gsap from 'gsap';
import { MainLink } from '../../ui-kit/Links';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HeaderBlockBottomLeft } from '../HeaderBlock/HeaderBlockBottomLeft';
import { HeaderBlockBottomRight } from '../HeaderBlock/HeaderBlockBottomRight';
import { GlobalStore } from '../../context/GlobalStore';
import { route } from '../../constants/routes';

gsap.registerPlugin(ScrollTrigger);

export const HeaderComponent = () => {
  const { pathname } = useLocation();
  const { palette } = useTheme();
  const refHeader = useRef(null);
  const { favList } = useContext(GlobalStore)!;

  const isFixed = pathname === route.contact.path;
  const color = pathname === route.contact.path ? 'background' : 'secondary';

  useEffect(() => {
    if (!refHeader.current) return;

    ScrollTrigger.enable();

    if (pathname === route.main.path) {
      gsap.fromTo(
        refHeader.current,
        {
          position: 'fixed',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(20px) brightness(130%)',
          width: '100%',
        },
        {
          scrollTrigger: {
            scrub: 1,
            trigger: 'body',
            start: 200,
            end: 800,
          },
          backgroundColor: palette.colors.background,
          padding: '15px 0',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          boxShadow: `0px 10px 15px -3px rgba(0,0,0,0.1)`,
          width: 950,
        },
      );
      return;
    }
    if (!isFixed) {
      gsap.set(refHeader.current, {
        position: 'relative',
        maxWidth: '100%',
        backdropFilter: 'unset',
      });
    } else {
      gsap.set(refHeader.current, {
        position: 'absolute',
        maxWwidth: '100%',
        backdropFilter: 'unset',
      });
    }

    ScrollTrigger.disable();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <StyledHeader ref={refHeader}>
      <Container>
        <StyledHeaderContent>
          <HeaderBlockComponent
            renderTop={<HeaderBlockTopLeft color={color} />}
            renderBottom={<HeaderBlockBottomLeft color={color} />}
            color={color}
          />
          <MainLink to={route.main.path}>
            <IconSvg
              type="logo-knitty"
              stroke={color === 'background' ? 'back' : 'none'}
              fill={color === 'background' ? 'back' : 'black'}
              width="170"
              height="66"
              viewBox="0 0 170 66"
            />
          </MainLink>
          <HeaderBlockComponent
            color={color}
            renderTop={<HeaderBlockTopRight color={color} />}
            renderBottom={
              <HeaderBlockBottomRight favList={favList} color={color} />
            }
          />
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
};
