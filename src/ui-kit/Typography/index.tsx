import {
  StyledHeading2,
  TextBody1Bold,
  TextBody2Bold,
  TextBody3Bold,
  StyledHeading3,
} from './styles';
import { TextBaseProps } from './types';

export const Heading1: React.FC<TextBaseProps> = (props) => (
  <StyledHeading2 {...props} />
);
export const Heading2: React.FC<TextBaseProps> = (props) => (
  <StyledHeading2 {...props} />
);
export const Heading3: React.FC<TextBaseProps> = (props) => (
  <StyledHeading3 {...props} />
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
