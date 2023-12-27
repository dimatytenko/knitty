import styled from 'styled-components';

import { IconSvg } from '../../ui-kit/Icon/Svg';
import { TextBody3Bold } from '../../ui-kit/Typography/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

   ${TextBody3Bold} {
    white-space: nowrap;
  }
`;

export const ItemWrapper = styled.div`
 
`;

export const ArrowIcon = styled(IconSvg).attrs({
  type: 'arrow-light',
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
})<{ $open: boolean }>`
  transform: ${({ $open }) => ($open ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;


