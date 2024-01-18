import { Br } from '../../ui-kit/Br';
import { StyledAuthWrapper } from './styles';
import { IProps } from './types';

export default function Auth({  children }: IProps) {
  return (
    <StyledAuthWrapper>
      <Br desktop={120} mobile={60} />
      {children}
      <Br desktop={120} mobile={60} />
    </StyledAuthWrapper>
  );
}
