import styled from 'styled-components';
import { StyledMainButton } from '../../ui-kit/Buttons/styles';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 426px;

  padding-top: 70px;

  ${StyledMainButton} {
    &:first-of-type {
      margin-top: 30px;
    }
  }
`;
