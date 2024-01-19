import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledMainButton } from '../../ui-kit/Buttons/styles';

export const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-decoration: underline;

  font-weight: 500;
  margin-top: 30px;

  text-align: center;
`;

export const StyledForgotLink = styled(Link)`
  display: block;

  text-decoration: underline;
  margin-top: 10px;
`;

export const StyledSubmitBtn = styled(StyledMainButton)`
  margin-top: 30px;
  text-transform: uppercase;
  font-weight: 500;
`;
