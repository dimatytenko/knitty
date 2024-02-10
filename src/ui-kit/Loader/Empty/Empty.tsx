import { useEffect } from 'react';
import { IconSvg } from '../../Icon/Svg';
import { Text2Bold } from '../../Typography';
import { StyledEmpty } from './styles';
import gsap from 'gsap';

export const Empty = () => {
  useEffect(() => {
    gsap.fromTo(
      '.knitting-needles',
      {
        strokeDasharray: 5000,
        opacity: 0.4,
      },
      {
        strokeDasharray: 2000,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'power.out',
      },
    );
  }, []);
  return (
    <StyledEmpty>
      <Text2Bold $case="uppercase" color="grey">
        No items...
      </Text2Bold>
      <IconSvg
        className="knitting-needles"
        type="knitting-needles"
        width="438"
        height="302"
        viewBox="0 0 438 302"
        fill="none"
      />
    </StyledEmpty>
  );
};
