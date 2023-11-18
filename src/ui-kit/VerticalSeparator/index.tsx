import { StyledVerticalSeparator } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const VerticalSeparator: React.FC<IProps> = ({ children }) => {
  return <StyledVerticalSeparator>{children}</StyledVerticalSeparator>;
};
