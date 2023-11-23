import styled from 'styled-components';
import { TextBody1Bold } from '../../ui-kit/Typography/styles';

export const StyledLangSwitcherWrapper = styled.div`
  display: inline-flex;
  gap: 10px;

  ${TextBody1Bold} {
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.colors.grey};
  }

  button.active {
    ${TextBody1Bold} {
      color: ${({ theme }) => theme.palette.colors.black};
    }
  }
`;
