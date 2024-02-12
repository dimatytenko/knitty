import { ContactsWrapper, StyledTitle } from './styles';
import { Container } from '../Layout/styles';
import { Contacts } from './Contact';
import { useMedia } from 'use-media';
import { useTranslation } from 'react-i18next';

export const ContactsComponent = () => {
  const {t} = useTranslation()
  const isDesktop = useMedia({ minWidth: '900px' });

  return (
    <ContactsWrapper>
      {isDesktop ? (
        <Container>
          <StyledTitle $case="uppercase" color="background">
            {t('footer.Contact')}
          </StyledTitle>
          <Contacts />
        </Container>
      ) : (
        <>
          <StyledTitle $case="uppercase" color="background">
            {t('footer.Contact')}
          </StyledTitle>
          <Contacts />
        </>
      )}
    </ContactsWrapper>
  );
};
