import CollapseComponent from '../../../components/Collapse';
import { Br } from '../../../ui-kit/Br';
import { Heading2 } from '../../../ui-kit/Typography';
import { SubHeading, Text } from './Typografy';
import { Container } from '../../../ui-kit/Container';
import { POINTS } from '../../../ui-kit/Container/types';
import { useMedia } from 'use-media';
import { useTranslation } from 'react-i18next';
import useStatic from './useStatic';

const Faq = () => {
  const { faqList }= useStatic();
  const isDesktop = useMedia({ minWidth: '900px' });
  const { t } = useTranslation();

  return (
    <Container
      point={POINTS.l}
      style={{ paddingTop: isDesktop ? '120px' : '30px' }}
    >
      <Br desktop={120} mobile={60} />
      <Heading2 $justify="center">
        {t('faq.Frequently Asked Questions')}
      </Heading2>
      <Text $case="uppercase" color="unfocus">
        {t('faq.text')}
      </Text>
      <Br desktop={120} mobile={60} />
      <SubHeading>{t('faq.Orders & Payments.heading')}</SubHeading>
      <Br desktop={60} mobile={60} />
      <CollapseComponent list={faqList['Orders & Payments']} />
      <Br desktop={60} mobile={60} />
      <SubHeading>{t('faq.Returns & refunds.heading')}</SubHeading>
      <Br desktop={60} mobile={60} />
      <CollapseComponent list={faqList['Returns & refunds']} />
      <Br desktop={60} mobile={60} />
      <SubHeading>{t('faq.Shipping.heading')}</SubHeading>
      <Br desktop={60} mobile={60} />
      <CollapseComponent list={faqList['Shipping']} />
      <Br desktop={120} mobile={60} />
    </Container>
  );
};

export default Faq;
