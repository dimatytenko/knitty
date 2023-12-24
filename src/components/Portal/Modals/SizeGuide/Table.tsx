import { useContext, useEffect } from 'react';
import { Text2Bold } from '../../../../ui-kit/Typography';
import { StyledTableCell, StyledTableRow, StyledTabledWrapper } from './styles';
import { SizeGuideContext } from './context/context';
import { tabs } from './assets/tabs';
import gsap from 'gsap';

export const TableComponent = () => {
  const { active } = useContext(SizeGuideContext)!;

  useEffect(() => {
    gsap.fromTo(
      '.table-item',
      {
        rotate: 10,

        skewX: '-10deg',
        skewY: '10deg',

        opacity: 0,
        scale: 1.5,
      },
      {

        rotate: 0,
        skewX: '0deg',
        skewY: '0deg',

        overwrite: false,
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.5,
          from: 'random',
        },
      },
    );
  }, [active]);

  return (
    <StyledTabledWrapper>
      {Object.values(tabs)[active].map(({ name, cells }) => (
        <StyledTableRow key={name}>
          <Text2Bold $case="uppercase">{name}</Text2Bold>
          {cells.map((cell, idx) => (
            <StyledTableCell
              key={idx}
              className="table-item"
              // ref={(el) => (refItems.items[parentIdx+idx] = el)}
            >
              <Text2Bold $case="uppercase">{cell}</Text2Bold>
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </StyledTabledWrapper>
  );
};
