import styled from 'styled-components';
import {
  StyledHeading2,
  TextBody2Bold,
} from '../../../../ui-kit/Typography/styles';

export const StyledSizeGuide = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  padding: 60px;
  background-color: ${({ theme }) => theme.palette.colors.background};

  overflow-x: scroll;
  width: 100vw;
  max-width: 1000px;

  &::-webkit-scrollbar {
    height: 10px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.palette.colors.line}; /* цвет бегунка */
  }

  ${TextBody2Bold} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  grid-template-columns: 175px repeat(6, 115px);

  &:first-of-type ${StyledTableCell} {
    border-top: 1px solid ${({ theme }) => theme.palette.colors.primary};
  }
`;

export const StyledSizeGuideControls = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const StyledCheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 60px;
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    visibility: hidden;
    display: none;
  }

  label {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
`;

export const StyledCircleStroke = styled.span`
  display: block;
  width: 16px;
  height: 16px;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.colors.primary};
`;
export const StyledCircleFilled = styled.span`
  display: block;
  position: absolute;

  top: 50%;

  transform: translateY(-58%);
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.colors.primary};
`;
