import styled from 'styled-components';

export const BenefitsWrapper = styled.div`
  padding: 36px 0;
  border-top: 1px solid ${({ theme }) => theme.palette.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.palette.colors.line};
  &:hover ul {
    animation-play-state: paused;
  }
`;

export const BenefitsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  white-space: nowrap;
`;

export const BenefitsItem = styled.li``;
