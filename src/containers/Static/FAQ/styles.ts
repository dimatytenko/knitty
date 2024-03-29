import styled from 'styled-components';
import {
  StyledHeading3,
  TextBody2Bold,
} from '../../../ui-kit/Typography/styles';
import { Media } from '../../../ui-kit/theme/breakpoints';

export const StyledTextFaq = styled(TextBody2Bold)`
  width: 100%;
  max-width: 430px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const StyledHeading = styled(StyledHeading3)`
  font-size: 40px;

  ${Media.down.m} {
    font-size: 32px;
  }
`;
