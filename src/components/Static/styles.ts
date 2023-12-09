import styled from 'styled-components';

import { Heading2, Heading3, Text1Bold } from '../../ui-kit/Typography';

export const StaticWrapper = styled.div`
  padding: 93px 0 120px;
`;

export const StaticTitle = styled(Heading2)`
  text-align: center;
  margin-bottom: 100px;
`;

export const StaticSubtitle = styled(Heading3)`
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const StaticText = styled(Text1Bold)`
  margin-bottom: 20px;
`;

export const StaticTextBlock = styled(Text1Bold)`
  text-transform: uppercase;
  margin-bottom: 20px;
`;
