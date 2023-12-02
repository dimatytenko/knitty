import styled from 'styled-components';

export const StyledCircle = styled.span`
  display: block;
  position: absolute;
  z-index: 0;
  transform-origin: bottom center;

  left: 0;
  top: 50%;

  width: 200px;
  height: 200px;

  border-radius: 50%;

  transform: scale(0);

  background-color: rgba(255, 255, 255, 0.3);

  transition: ${({ theme }) => theme.transitions.main};
`;
