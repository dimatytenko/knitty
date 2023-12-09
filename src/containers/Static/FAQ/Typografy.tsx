import { TextBaseProps } from '../../../ui-kit/Typography/types';
import { StyledHeading, StyledTextFaq } from './styles';

export const Text: React.FC<TextBaseProps> = (props) => {
  return <StyledTextFaq {...props} />;
};

export const SubHeading: React.FC<TextBaseProps> = (props) => {
  return <StyledHeading {...props} />;
};
