import { StyledContent, StyledHeroWrapper } from './styles';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import hero from './assets/hero.jpg';
import hero1 from './assets/hero1.jpg';
import hero2 from './assets/hero2.png';
const imagesList = [hero, hero1, hero2];

export const HeroComponent = () => {
  const [activeImg, setActiveImg] = useState(0);
  const refImg = useRef([]);
  const percentagesStart = [0, 20, 40, 60, 80];
  const percentagesEnd = [0, 20, 40, 60, 80].reverse();

  const items = new Array(5).fill(1).map((_, idx) => (
    <StyledContent
      ref={(el) => refImg.current.push(el)}
      key={idx}
      style={{
        clipPath: `inset(0 ${percentagesStart[idx]}% 0 ${percentagesEnd[idx]}%)`,
        // backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.1), url(${hero})`,
        backgroundImage: `url(${imagesList[activeImg]})`,
      }}
    />
  ));

  useEffect(() => {
    gsap.fromTo(
      refImg.current,
      {
        top: '-100%',
      },
      {
        top: 0,
        stagger: 0.1,
        duration: 1.5,
        // onStart: () => {
        //   setActiveImg((prev) =>
        //     prev === imagesList.length - 1 ? 0 : prev + 1,
        //   );
        // },
      },
    );
  }, []);

  return (
    <StyledHeroWrapper
    // style={{ backgroundImage: `url(${imagesList[activeImg]})` }}
    >
      {items}
    </StyledHeroWrapper>
  );
};
