import styled from 'styled-components';

import { IconSvg } from '../../ui-kit/Icon/Svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ArrowIcon = styled(IconSvg).attrs({
  type: 'arrow-light',
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
})<{ $open: boolean }>`
  transform: ${({ $open }) => ($open ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

export const ItemWrapper = styled.div``;
