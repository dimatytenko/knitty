import { useContext, useEffect, useRef } from 'react';
import { HorizontalSeparator } from '../../../../ui-kit/HorizontalSeparator';
import { GlobalStore } from '../../../../context/GlobalStore';
import { CategoriesType } from '../../../../context/GlobalStore/types';
import { NavLink } from 'react-router-dom';
import { StyledBodyFooter, StyledBodyWrapper } from './styles';
import { ButtonClose } from './ButtonClose';
import { IProps } from './types';
import gsap from 'gsap';
import { LangSwitcherComponent } from '../../../LangSwitcher';
import { MainLink } from '../../../../ui-kit/Links';

export const ModalBody = ({ setIsVisible }: IProps) => {
  const refBody = useRef(null);
  const {
    globalState: { categories },
  } = useContext(GlobalStore)!;

  useEffect(() => {
    if (!refBody) return;
    gsap.fromTo(
      [...refBody?.current.children],
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
      },
    );
  }, [refBody]);

  const color = 'secondary';

  return (
    <StyledBodyWrapper ref={refBody}>
      <ButtonClose onClose={() => setIsVisible(false)} />
      <div>
        <p>Search</p>
        <HorizontalSeparator />
      </div>
      {categories.map(({ name, id }: CategoriesType) => (
        <div key={id}>
          <NavLink
            to={`gallery/${name.toLowerCase()}`}
            onClick={() => setIsVisible(false)}
          >
            {name.toLowerCase()}
          </NavLink>
          <HorizontalSeparator />
        </div>
      ))}
      <StyledBodyFooter>
        <LangSwitcherComponent color={color} />
        <div>
          <MainLink to="/sign-up" color={color}>
            Sign Up
          </MainLink>
          <MainLink to="/sign-in" color={color}>
            Sign In
          </MainLink>
        </div>
      </StyledBodyFooter>
    </StyledBodyWrapper>
  );
};
