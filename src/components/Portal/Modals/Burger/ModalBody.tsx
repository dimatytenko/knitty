/* eslint-disable no-unsafe-optional-chaining */
import { useContext, useEffect, useRef, useState } from 'react';
import { HorizontalSeparator } from '../../../../ui-kit/HorizontalSeparator';
import { GlobalStore } from '../../../../context/GlobalStore';
import { CategoriesType } from '../../../../context/GlobalStore/types';
import { NavLink } from 'react-router-dom';
import { StyledBodyWrapper, StyledItem, WrapperModalCart } from './styles';
import { ButtonClose } from './ButtonClose';
import { IProps } from './types';
import gsap from 'gsap';
import { ModalCart } from '../Cart';
import { ModalFooter } from './ModalFooter';

export const ModalBody = ({ setIsVisible }: IProps) => {
  const [visibleModalCart, setIsVisibleModalCart] = useState<boolean>(false);

  const refBody = useRef();
  const {
    globalState: { categories, cartList },
    globalSetter,
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
        <StyledItem as="p">Search</StyledItem>
        <HorizontalSeparator />
      </div>
      {categories.map(({ name, id }: CategoriesType) => (
        <div key={id}>
          <StyledItem
            as={NavLink}
            to={`gallery/${name.toLowerCase()}`}
            onClick={() => setIsVisible(false)}
          >
            {name.toLowerCase()}
          </StyledItem>
          <HorizontalSeparator />
        </div>
      ))}
      <div>
        <StyledItem
          as={NavLink}
          to={`favorites`}
          onClick={() => setIsVisible(false)}
        >
          favorites
        </StyledItem>
        <HorizontalSeparator />
      </div>
      <div>
        <StyledItem
          as="button"
          type="button"
          onClick={() => setIsVisibleModalCart((prev) => !prev)}
        >
          cart
        </StyledItem>

        <HorizontalSeparator />
      </div>
      <ModalFooter color={color} closeModal={() => setIsVisible(false)} />
      {visibleModalCart && (
        <WrapperModalCart>
          <ModalCart
            cartList={cartList}
            setData={globalSetter}
            setIsVisible={setIsVisibleModalCart}
          />
        </WrapperModalCart>
      )}
    </StyledBodyWrapper>
  );
};
