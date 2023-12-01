import styled from 'styled-components';

export const StyledCollaps = styled.div``;

export const StyledTitle = styled.div`
  padding: 20px 0;
  cursor: pointer;
`;

export const StyledText = styled.div`
  padding: 0;
  height: 0;
`;

export const StyledLeftBlock = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StyledRightBlock = styled.div`
  & > div {
    margin-top: 10px;
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
  }
`;

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.palette.colors.line};
`;
