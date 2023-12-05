import { ContactsWrapper, ContentWrapper, StyledTitle } from './styles';
import { Container } from '../Layout/styles';
import { Contacts } from './Contact';

export const ContactsComponent = () => {
  return (
    <ContactsWrapper>
      <Container>
        <ContentWrapper>
          <StyledTitle $case="uppercase" color="background">
            Contact
          </StyledTitle>
          <Contacts />
        </ContentWrapper>
      </Container>
    </ContactsWrapper>
  );
};
