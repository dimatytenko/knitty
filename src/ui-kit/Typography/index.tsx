import {
  StyledHeading2,
  TextBody1Bold,
  TextBody2Bold,
  TextBody3Bold,
  TextBody4Bold,
} from './styles';
import { TextBaseProps } from './types';

export const Heading2: React.FC<TextBaseProps> = (props) => (
  <StyledHeading2 {...props} />
);
export const Text1Bold: React.FC<TextBaseProps> = (props) => (
  <TextBody1Bold {...props} />
);
export const Text2Bold: React.FC<TextBaseProps> = (props) => (
  <TextBody2Bold {...props} />
);
export const Text3Bold: React.FC<TextBaseProps> = (props) => (
  <TextBody3Bold {...props} />
);
export const Text4Bold: React.FC<TextBaseProps> = (props) => (
  <TextBody4Bold {...props} />
);
