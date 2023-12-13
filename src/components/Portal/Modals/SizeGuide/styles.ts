import styled from 'styled-components';
import { StyledHeading2 } from '../../../../ui-kit/Typography/styles';

export const StyledSizeGuide = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  padding: 60px;
  background-color: ${({ theme }) => theme.palette.colors.background};
`;

export const StyledTabledWrapper = styled.div`
  position: relative;
  margin-top: 70px;
`;

export const StyledTableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 115px;
  height: 43px;

  border-bottom: 1px solid ${({ theme }) => theme.palette.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.palette.colors.primary};

  &:first-of-type {
    border-left: 1px solid ${({ theme }) => theme.palette.colors.primary};
  }
`;

export const StyledTableRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 175px repeat(7, 115px);

  &:first-of-type ${StyledTableCell} {
    border-top: 1px solid ${({ theme }) => theme.palette.colors.primary};
  }
`;

export const StyledSizeGuideControls = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const StyledTabsWrapper = styled.div`
  position: relative;

  display: flex;
  gap: 60px;
`;

export const StyledTabs = styled(StyledHeading2)`
  cursor: pointer;
`;

export const StyledLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 148px;
  height: 1px;

  background-color: ${({ theme }) => theme.palette.colors.primary};
`;
