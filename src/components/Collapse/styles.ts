import styled from 'styled-components';

export const StyledCollaps = styled.div``;

export const StyledTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  align-items: center;

  padding: 16px 0;
  cursor: pointer;
`;

export const StyledText = styled.div`
  width: 95%;
  padding: 0;
  height: 0;
`;

export const StyledLeftBlock = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.colors.line};

  position: relative;
  overflow: hidden;
`;

export const StyledPlusMinusCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    position: absolute;
    width: 15px;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.colors.black};

    &:last-of-type {
      transform: rotate(90deg);
    }
  }
`;

export const Wrapper = styled.div``;
