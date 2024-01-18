import { useForm } from '../../hooks/useForm';
import { InputField } from '../../ui-kit/InputField';
import { Heading2 } from '../../ui-kit/Typography';
import { Form } from '../Form';
import { StyledPageTitleWrapper } from '../PageTitle/styles';

export default function SignUp() {
  const { data, setData } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const items = [
    {
      inputKey: 'firstName',
      type: 'text',
      label: 'First name',
      value: data.firstName,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, firstName: value })),
    },
    {
      inputKey: 'lastName',
      type: 'text',
      label: 'Last name',
      value: data.lastName,
      onChange: (value: string) =>
        setData((prev: any) => ({ ...prev, lastName: value })),
    },
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
        <Heading2>Sign up</Heading2>
      </StyledPageTitleWrapper>
      <Form>
        <Form>
          <>
            {items.map((props) => (
              <InputField key={props.inputKey} {...props} />
            ))}
          </>
        </Form>
      </Form>
    </>
  );
}
