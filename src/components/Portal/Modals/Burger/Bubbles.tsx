import { forwardRef } from 'react';
import { StyledBubbles } from './styles';

const Bubbles = forwardRef((_, ref) => {
  return <StyledBubbles ref={(el) => ref.current.push(el)} />;
});

Bubbles.displayName = 'Bubbles';

export default Bubbles;
