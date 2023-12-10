import { faqList } from '../../../constants/faq';
import CollapseComponent from '../../../components/Collapse';
import { Br } from '../../../ui-kit/Br';
import { Heading2 } from '../../../ui-kit/Typography';
import { SubHeading, Text } from './Typografy';
import { Container } from '../../../ui-kit/Container';
import { POINTS } from '../../../ui-kit/Container/types';

export function Faq() {
  return (
    <Container point={POINTS.l}>
      <Br desktop={120} mobile={60} />
      <Heading2 $justify="center">Frequently Asked Questions</Heading2>
      <Text $case="uppercase" color="unfocus">
        Easily find the answers to the most frequently asked questions about our
        products, shipping, returns and everything in between.
      </Text>
      <Br desktop={120} mobile={60} />
      <SubHeading>Orders & Payments</SubHeading>
      <Br desktop={60} mobile={60} />
      <CollapseComponent list={faqList['Orders & Payments']} />
      <Br desktop={60} mobile={60} />
      <SubHeading>Returns & refunds</SubHeading>
      <Br desktop={60} mobile={60} />
      <CollapseComponent list={faqList['Returns & refunds']} />
      <Br desktop={60} mobile={60} />
      <SubHeading>Shipping</SubHeading>
      <Br desktop={60} mobile={60} />
      <CollapseComponent list={faqList['Shipping']} />
      <Br desktop={120} mobile={60} />
    </Container>
  );
}
