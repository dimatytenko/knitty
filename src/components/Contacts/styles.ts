import styled from 'styled-components';

import contact_back from './assets/contact_back.jpg';
import { Heading1, Text1Bold, Text2Bold } from '../../ui-kit/Typography';

export const ContactsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${contact_back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  padding: 170px 0 40px;
`;

export const StyledTitle = styled(Heading1)`
  margin-bottom: 100px;
`;

// Contact
export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  padding: 60px;
  background: ${({ theme }) => theme.palette.colors.backdropLight};
  backdrop-filter: blur(10px);
`;

export const TextHead = styled(Text1Bold)`
  margin-bottom: 15px;
`;

export const TextInfo = styled(Text2Bold)`
  max-width: 310px;
  text-transform: uppercase;
`;

export const ALink = styled.a``;

export const CenterBlock = styled.div`
  display: flex;
  gap: 108px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
