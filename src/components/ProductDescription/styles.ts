import styled from 'styled-components';
import {
  StyledCollaps,
  StyledPlusMinusCircle,
  StyledTitle,
} from '../Collapse/styles';
import { TextBody1Bold, TextBody2Bold } from '../../ui-kit/Typography/styles';
import { scrollStyles } from '../../ui-kit/theme/scroll';

export const StyledProductDescription = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledPhotosBlock = styled.div`
  ${scrollStyles}
  width: 864px;
  padding-right: 6px;
  height: 600px;
  overflow-y: auto;
`;

export const StyledPhotosList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledInfoBlock = styled.div`
  max-width: 406px;

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
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DescriptionText = styled(TextBody2Bold).attrs({
  $case: 'uppercase',
})`
  position: relative;
  width: 100%;

  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.colors.primary};
  }
`;

export const StyledSizeGuideButton = styled(TextBody2Bold).attrs({
  $case: 'uppercase',
  color: 'unfocus',
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    transform: rotate(-90deg);
    path {
      stroke: ${({ theme }) => theme.palette.colors.unfocus};
    }
  }
`;
