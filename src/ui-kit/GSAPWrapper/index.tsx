import { forwardRef } from 'react';
import { IProps, Ref } from './types';
import { StyledGSAPWrapper } from './styles';

const GSAPWrapper = forwardRef<Ref, IProps>((props, ref) => (
  <StyledGSAPWrapper ref={ref}>{props.children}</StyledGSAPWrapper>
));

GSAPWrapper.displayName;

export { GSAPWrapper };
