import { useGoogleLogin } from '@react-oauth/google';
import { StyledGoogleBtn } from './styles';
import GoogleIcon from './GoogleIcon';
import { Text2Bold } from '../../Typography';
import { HoverCircle } from '../../HoverCircle';
import { useTranslation } from 'react-i18next';

export const GoogleLoginBtn = () => {
  const { t } = useTranslation();
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
        <Text2Bold $case="uppercase">{ t("common.google_btn")}</Text2Bold>
      </div>
      <HoverCircle />
    </StyledGoogleBtn>
  );
};
