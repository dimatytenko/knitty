import styled from 'styled-components';
import {
  StyledCollaps,
  StyledPlusMinusCircle,
  StyledTitle,
} from '../Collapse/styles';
import { TextBody1Bold, TextBody2Bold } from '../../ui-kit/Typography/styles';

export const StyledProductDescription = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledPhotosBlock = styled.div`
  width: 66.5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const StyledInfoBlock = styled.div`
  width: 33.5%;

  position: relative;
  height: 100%;
`;

export const StyledStickyWrapper = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledInfoTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledInfoControls = styled(StyledInfoTitle)`
  flex-wrap: nowrap;
  align-items: center;
  gap: 11px;
`;

export const StyledInfoDescription = styled.div`
  ${TextBody1Bold} {
    padding: 20px 0;
  }

  ${StyledCollaps} ${TextBody2Bold} {
    text-transform: unset;
    color: ${({ theme }) => theme.palette.colors.primary};
  }

  ${StyledTitle} {
    padding: 16px 0;
  }

  ${StyledPlusMinusCircle} {
    border: unset;
  }
`;

export const StyledInfoDescriptionTitle = styled.div`
  ${TextBody2Bold} {
    padding: 20px;
  }
  display: flex;
  justify-content: space-around;
`;
