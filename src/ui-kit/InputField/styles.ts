import styled from 'styled-components';
import { TextBody2Bold } from '../Typography/styles';

export const StyledInputField = styled.div`
  position: relative;
  margin-top: 20px;

  input {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.palette.colors.primary};
    background-color: transparent;

    padding: 10px 0px;
  }

`;

export const StyledLabel = styled(TextBody2Bold).attrs({
  $case: 'uppercase',
  $color: 'red',
})`
  position: absolute;
  top: 50%;
  left: 0;

  transform: translateY(-50%);
`;
