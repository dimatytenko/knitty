import {
  ContactWrapper,
  TextHead,
  TextInfo,
  ALink,
  LinksWrapper,
  CenterBlock,
  SocialWrapper,
  SocialBlockWrapper,
} from './styles';
import { FooterLink } from '../../ui-kit/Links';
import useStatic from '../Layout/useStatic';
import { useTranslation } from 'react-i18next';
import useStaticData from './useStaticData';



interface ILink {
  title: string;
  body: string;
  path: string;
}

export const getLink: React.FC<ILink> = ({ title, body, path }) => {
  return (
    <div key={title}>
      <TextHead color="background">{title}</TextHead>
      <ALink href={path}>
        <TextInfo color="background">{body}</TextInfo>
      </ALink>
    </div>
  );
};

export const Contacts = () => {
  const { phones, emails } = useStaticData();
  const { t } = useTranslation();
  const { socialLinks } = useStatic();
  return (
    <ContactWrapper>
      <TextInfo color="background">{t('contacts.text')}</TextInfo>

      <CenterBlock>
        <LinksWrapper>{phones.map((item) => getLink(item))}</LinksWrapper>
        <LinksWrapper>{emails.map((item) => getLink(item))}</LinksWrapper>
      </CenterBlock>
      <SocialBlockWrapper>
        <TextHead color="background">{t('footer.SOCIAL')}</TextHead>
        <SocialWrapper>
          {socialLinks.map(({ title, path, ...rest }) => (
            <FooterLink color="background" key={title} to={path} {...rest}>
              {title}
            </FooterLink>
          ))}
        </SocialWrapper>
      </SocialBlockWrapper>
    </ContactWrapper>
  );
};
