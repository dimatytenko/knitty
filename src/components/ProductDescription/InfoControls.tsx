import { MainButton } from '../../ui-kit/Buttons';
import { Size } from '../Size';
import { StyledInfoControls } from './styles';

export const InfoControls = ({ id }: { id: string | number }) => {
  const isInCart = false;
  return (
    <StyledInfoControls>
      <Size />
      <MainButton
        isInCart={isInCart}
        title={isInCart ? 'In cart' : 'Add to cart'}
        onClick={() => console.log(id)}
      />
    </StyledInfoControls>
  );
};
