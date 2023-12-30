import { ContactsWrapper, ContentWrapper, StyledTitle } from './styles';
import { Container } from '../Layout/styles';
import { Contacts } from './Contact';
import { useMedia } from 'use-media';

export const ContactsComponent = () => {
  const isDesktop = useMedia({ minWidth: '900px' });

  return (
    <ContactsWrapper>
      {isDesktop ? (
        <Container>
          <StyledTitle $case="uppercase" color="background">
            Contact
          </StyledTitle>
          <Contacts />
        </Container>
      ) : (
        <>
          <StyledTitle $case="uppercase" color="background">
            Contact
          </StyledTitle>
          <Contacts />
        </>
      )}
    </ContactsWrapper>
  );
};
