import styled from 'styled-components';

export const StyledVerticalSeparator = styled.span<{ color?: string }>`
  &::after {
    content: '';
    display: inline-block;

    height: 10px;
    width: 1px;
    margin-left: 10px;

    background-color: ${({ color, theme }) =>
      color === 'background'
        ? theme.palette.colors[color]
        : 'rgba(0, 0, 0, 0.1)'};
  }
`;
