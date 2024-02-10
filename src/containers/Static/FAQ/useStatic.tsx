import { useTranslation } from 'react-i18next';

export default function useStatic() {
  const { t } = useTranslation();
  const faqList = {
    'Orders & Payments': [
      {
        title: t('faq.Orders & Payments.0.title'),
        text: t('faq.Orders & Payments.0.text'),
      },
      {
        title: t('faq.Orders & Payments.1.title'),
        text: t('faq.Orders & Payments.1.text'),
      },
      {
        title: t('faq.Orders & Payments.2.title'),
        text: t('faq.Orders & Payments.2.text'),
      },
      {
        title: t('faq.Orders & Payments.3.title'),
        text: t('faq.Orders & Payments.3.text'),
      },
      {
        title: t('faq.Orders & Payments.4.title'),
        text: t('faq.Orders & Payments.4.text'),
      },
      {
        title: t('faq.Orders & Payments.5.title'),
        text: t('faq.Orders & Payments.5.text'),
      },
      {
        title: t('faq.Orders & Payments.6.title'),
        text: t('faq.Orders & Payments.6.text'),
      },
      {
        title: t('faq.Orders & Payments.7.title'),
        text: t('faq.Orders & Payments.7.text'),
      },
      {
        title: t('faq.Orders & Payments.8.title'),
        text: t('faq.Orders & Payments.8.text'),
      },
    ],
    'Returns & refunds': [
      {
        title: t('faq.Returns & refunds.0.title'),
        text: t('faq.Returns & refunds.0.text'),
      },
      {
        title: t('faq.Returns & refunds.1.title'),
        text: t('faq.Returns & refunds.1.text'),
      },
      {
        title: t('faq.Returns & refunds.2.title'),
        text: t('faq.Returns & refunds.2.text'),
      },
      {
        title: t('faq.Returns & refunds.3.title'),
        text: t('faq.Returns & refunds.3.text'),
      },
      {
        title: t('faq.Returns & refunds.4.title'),
        text: t('faq.Returns & refunds.4.text'),
      },
      {
        title: t('faq.Returns & refunds.5.title'),
        text: t('faq.Returns & refunds.5.text'),
      },
      {
        title: t('faq.Returns & refunds.6.title'),
        text: t('faq.Returns & refunds.6.text'),
      },
      {
        title: t('faq.Returns & refunds.7.title'),
        text: t('faq.Returns & refunds.7.text'),
      },
      {
        title: t('faq.Returns & refunds.8.title'),
        text: t('faq.Returns & refunds.8.text'),
      },
    ],
    Shipping: [
      {
        title: t('faq.Shipping.0.title'),
        text: t('faq.Shipping.0.text'),
      },
      {
        title: t('faq.Shipping.1.title'),
        text: t('faq.Shipping.1.text'),
      },
    ],
  };
  return { faqList };
}
