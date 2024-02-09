import { useTranslation } from 'react-i18next';
import { route } from '../../constants/routes';
import { useForm } from '../../hooks/useForm';
import { MainButton } from '../../ui-kit/Buttons';
import { GoogleLoginBtn } from '../../ui-kit/Buttons/GoogleLoginBtn';
import { InputField } from '../../ui-kit/InputField';
import { Heading2 } from '../../ui-kit/Typography';
import { Form } from '../Form';
import { StyledPageTitleWrapper } from '../PageTitle/styles';
import { StyledForgotLink, StyledInputWrapper } from './styles';

export default function SignUp() {
  const { t } = useTranslation();
  const { data, setData, isValidObject } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const items = [
    {
      inputKey: 'firstName',
      type: 'text',
      label: t('auth.firstName'),
      value: data.firstName,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, firstName: value })),
    },
    {
      inputKey: 'lastName',
      type: 'text',
      label: t('auth.lastName'),
      value: data.lastName,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, lastName: value })),
    },
    {
      inputKey: 'email',
      type: 'email',
      label: t('auth.email'),
      value: data.email,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, email: value })),
    },
    {
      inputKey: 'password',
      type: 'password',
      label: t('auth.password'),
      value: data.password,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, password: value })),
    },
  ];
  return (
    <>
      <StyledPageTitleWrapper>
        <Heading2>{t(`header.signup`)}</Heading2>
      </StyledPageTitleWrapper>
      <Form>
        <>
          <StyledInputWrapper>
            {items.slice(0, 2).map((props) => (
              <InputField key={props.inputKey} {...props} />
            ))}
          </StyledInputWrapper>
          {items.slice(2).map((props) => (
            <InputField key={props.inputKey} {...props} />
          ))}
          <StyledForgotLink to={route.signIn.path}>
            {t(`header.signin`)}
          </StyledForgotLink>
          <MainButton
            title={t('common.CREATE ACCOUNT')}
            onClick={(e) => {
              e.preventDefault();
              console.log('CREATE ACCOUNT');
            }}
            type="submit"
            disabled={Object.values(isValidObject).some((val) => !val)}
          />
          <GoogleLoginBtn />
        </>
      </Form>
    </>
  );
}
