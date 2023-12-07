import { forwardRef } from 'react';
import { StyledBodyWrapper } from './styles';

const ModalBody = forwardRef((_, ref) => {
  return (
    <StyledBodyWrapper ref={(el) => ref.current.push(el)}>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'blue' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'yellow' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'blue' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'yellow' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'blue' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'yellow' }}
      ></div>
    </StyledBodyWrapper>
  );
});

ModalBody.displayName = 'ModalBody';

export default ModalBody;
