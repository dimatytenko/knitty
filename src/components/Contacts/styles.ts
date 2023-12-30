import styled from 'styled-components';

import contact_back from './assets/contact_back.jpg';
import { Heading1, Text1Bold, Text2Bold } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const ContactsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  background-image: url(${contact_back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: end;

  ${Media.up.desktop} {
    padding-bottom: 60px;
  }
`;

export const ALink = styled.a``;

export const ContentWrapper = styled.div``;

export const StyledTitle = styled(Heading1)`
  margin-bottom: 100px;
  padding: 20px;

  ${Media.up.desktop} {
    padding: unset;
  }
`;

// Contact
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  background: ${({ theme }) => theme.palette.colors.backdropLight};
  backdrop-filter: blur(10px);
  padding: 20px;

  ${Media.up.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const TextHead = styled(Text1Bold)`
  margin-bottom: 15px;
`;

export const TextInfo = styled(Text2Bold)`
  max-width: 310px;
  text-transform: uppercase;
`;

export const CenterBlock = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const SocialBlockWrapper = styled.div`
  ${Media.up.desktop} {
    justify-self: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  ${Media.up.desktop} {
    flex-direction: column;
    justify-content: unset;
    gap: 10px;
  }
`;
