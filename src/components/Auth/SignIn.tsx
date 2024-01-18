import { useForm } from '../../hooks/useForm';
import { InputField } from '../../ui-kit/InputField';
import { Heading2 } from '../../ui-kit/Typography';
import { Form } from '../Form';
import { StyledPageTitleWrapper } from '../PageTitle/styles';

export default function SignIn() {
  const { data, setData } = useForm({ email: '', password: '' });

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
        </>
      </Form>
    </>
  );
}
