import { Text2Bold } from '../../../../ui-kit/Typography';
import { rows } from './assets/rows';
import { StyledTableCell, StyledTableRow, StyledTabledWrapper } from './styles';

export const TableComponent = () => {
  return (
    <StyledTabledWrapper>
      {rows.map(({ name, cells }) => (
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
