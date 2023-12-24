import { useContext } from 'react';
import { Text2Bold } from '../../../../ui-kit/Typography';
import { StyledTableCell, StyledTableRow, StyledTabledWrapper } from './styles';
import { SizeGuideContext } from './context/context';
import { tabs } from './assets/tabs';

export const TableComponent = () => {
    const { active } = useContext(SizeGuideContext)!;

  return (
    <StyledTabledWrapper>
      {Object.values(tabs)[active].map(({ name, cells }) => (
        <StyledTableRow key={name}>
          <Text2Bold $case="uppercase">{name}</Text2Bold>
          {cells.map((cell, idx) => (
            <StyledTableCell key={idx}>
              <Text2Bold $case="uppercase">{cell}</Text2Bold>
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </StyledTabledWrapper>
  );
};
