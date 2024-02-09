import { useTranslation } from 'react-i18next';
import { route } from '../../constants/routes';
import { useForm } from '../../hooks/useForm';
import { MainButton } from '../../ui-kit/Buttons';
import { InputField } from '../../ui-kit/InputField';
import { Heading2 } from '../../ui-kit/Typography';
import { Form } from '../Form';
import { StyledPageTitleWrapper } from '../PageTitle/styles';
import { StyledForgotLink } from './styles';

interface IState {
  email: string;
}

export default function ForgotPswrd() {
  const { t } = useTranslation();
  const { data, setData, isValidObject } = useForm<IState>({ email: '' });

  const items = [
    {
      inputKey: 'email',
      type: 'email',
      label: t('auth.email'),
      value: data.email,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, email: value })),
    },
  ];

  return (
    <>
      <StyledPageTitleWrapper>
        <Heading2 $case="uppercase">{t('auth.RECOVER PASSWORD')}</Heading2>
      </StyledPageTitleWrapper>
      <Form>
        <>
          {items.map((props) => (
            <InputField key={props.inputKey} {...props} />
          ))}
          <StyledForgotLink to={route.signIn.path}>
            {t('auth.login')}
          </StyledForgotLink>
          <MainButton
            title={t('common.btn_submit')}
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
            disabled={Object.values(isValidObject).some((val) => !val)}
          />
        </>
      </Form>
    </>
  );
}
