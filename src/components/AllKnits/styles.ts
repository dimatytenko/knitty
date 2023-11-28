import styled from 'styled-components';

export const GloballyWrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transitions.main};
`;

export const ImageWrapper = styled.div`
  max-width: 536px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    filter: brightness(0.5);

    ${Image} {
      transform: scale(1.1);
    }
  }
`;

export const ButtonWrapper = styled.div`
  align-self: end;
`;
