import styled from 'styled-components';
import { TextBody2Bold } from '../../ui-kit/Typography/styles';

export const StyledPageTitleWrapper = styled.div`
  display: inline-block;
  position: relative;

  & > ${TextBody2Bold} {
    position: absolute;
    top: -20%;
    right: -15%;
  }
`;
