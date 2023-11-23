import styled from 'styled-components';

export const GloballyWrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const ImageWrapper = styled.div`
  max-width: 536px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const KnittsButton = styled.button`
  display: flex;
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-transform: uppercase;
  color: #212121;
  font-size: 20px;
  font-weight: 500;
`;
