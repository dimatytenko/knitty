import styled from 'styled-components';

import { Heading2, Heading3 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const AboutWrapper = styled.div``;

export const AboutList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${Media.down.xl} {
    justify-content: center;
    & > div:last-child {
      display: none;
    }
  }

  ${Media.down.m} {
    & > div:not(:first-child) {
      display: none;
    }
  }
`;

export const AboutTitle = styled(Heading2)`
  width: 100%;
  margin: 0 auto;
  display: block;
  text-align: center;
  max-width: 828px;
  margin-bottom: 148px;
`;

export const AboutSubtitle = styled(Heading3)`
  display: block;
  text-align: center;
  margin-bottom: 45px;
`;
