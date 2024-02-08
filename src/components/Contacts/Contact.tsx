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

const phones = [
  {
    title: 'Head Office',
    body: '+ 1302-255-1030',
    path: 'tel:+13022551030',
  },
  {
    title: 'Sales Department',
    body: '+ 1302-255-1031',
    path: 'tel:+13022551031',
  },
  {
    title: 'Press',
    body: '+ 1302-255-1032',
    path: 'tel:+13022551032',
  },
];

const emails = [
  {
    title: 'Advertising & PR',
    body: 'pr@knitty.com',
    path: 'mailto:pr@knitty.com',
  },
  {
    title: 'Common Question',
    body: 'pr@knitty.com',
    path: 'mailto:pr@knitty.com',
  },
  {
    title: 'Press',
    body: 'pr@knitty.com',
    path: 'mailto:pr@knitty.com',
  },
];

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
  const { socialLinks } = useStatic();
  return (
    <ContactWrapper>
      <TextInfo color="background">
        Need help regarding your order or have a question on a specific product?
      </TextInfo>

      <CenterBlock>
        <LinksWrapper>{phones.map((item) => getLink(item))}</LinksWrapper>
        <LinksWrapper>{emails.map((item) => getLink(item))}</LinksWrapper>
      </CenterBlock>
      <SocialBlockWrapper>
        <TextHead color="background">Social</TextHead>
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
