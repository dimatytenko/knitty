import { useGoogleLogin } from '@react-oauth/google';
import { StyledGoogleBtn } from './styles';
import GoogleIcon from './GoogleIcon';
import { Text2Bold } from '../../Typography';
import { HoverCircle } from '../../HoverCircle';

export const GoogleLoginBtn = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => {
      console.log('Login Failed');
    },
  });
  return (
    <StyledGoogleBtn onClick={() => login()}>
      <div>
        <GoogleIcon />
        <Text2Bold $case="uppercase">Sign in with Google</Text2Bold>
      </div>
      <HoverCircle />
    </StyledGoogleBtn>
  );
};
