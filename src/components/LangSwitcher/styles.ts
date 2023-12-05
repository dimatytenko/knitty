import styled from 'styled-components';
import { TextBody1Bold } from '../../ui-kit/Typography/styles';

export const StyledText = styled(TextBody1Bold)``;

export const StyledLangSwitcherWrapper = styled.div`
  display: inline-flex;
  gap: 10px;

  ${TextBody1Bold} {
    text-transform: uppercase;
  }

  button.inAactive {
    ${TextBody1Bold} {
      color: ${({ theme }) => theme.palette.colors.grey};
    }
  }
`;
