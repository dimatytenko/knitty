import { StyledVerticalSeparator } from './styles';
import { TextColor } from '../../ui-kit/Typography/types';

interface IProps {
  children: React.ReactNode;
  color?: TextColor;
}

export const VerticalSeparator: React.FC<IProps> = ({ color, children }) => {
  return (
    <StyledVerticalSeparator color={color}>{children}</StyledVerticalSeparator>
  );
};
