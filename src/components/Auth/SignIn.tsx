import { route } from '../../constants/routes';
import { useForm } from '../../hooks/useForm';
import { MainButton } from '../../ui-kit/Buttons';
import { GoogleLoginBtn } from '../../ui-kit/Buttons/GoogleLoginBtn';
import { InputField } from '../../ui-kit/InputField';
import { Heading2 } from '../../ui-kit/Typography';
import { Form } from '../Form';
import { StyledPageTitleWrapper } from '../PageTitle/styles';
import { StyledForgotLink, StyledLink } from './styles';

export default function SignIn() {
  const { data, setData, isValidObject } = useForm({ email: '', password: '' });

  const items = [
    {
      inputKey: 'email',
      type: 'email',
      label: 'Enter your email address',
      value: data.email,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, email: value })),
    },
    {
      inputKey: 'password',
      type: 'password',
      label: 'Enter your Password',
      value: data.password,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, password: value })),
    },
  ];

  console.log(isValidObject);

  return (
    <>
      <StyledPageTitleWrapper>
        <Heading2>Sign in</Heading2>
      </StyledPageTitleWrapper>
      <Form>
        <>
          {items.map((props) => (
            <InputField key={props.inputKey} {...props} />
          ))}
          <StyledForgotLink to={route.forgot.path}>
            Forgot your password?
          </StyledForgotLink>

          <MainButton
            title="Sign in"
            onClick={(e) => {
              e.preventDefault();
              console.log('sign in');
            }}
            type="submit"
            disabled={Object.values(isValidObject).some((val) => !val)}
          />
          <GoogleLoginBtn />
          <StyledLink to={route.signUp.path}>Create account</StyledLink>
        </>
      </Form>
    </>
  );
}
