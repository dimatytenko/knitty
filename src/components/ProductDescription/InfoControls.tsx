import { MainButton } from '../../ui-kit/Buttons';
import { StyledInfoControls } from './styles';

export const InfoControls = ({ id }: { id: string | number }) => {
  const isInCart = false;
  return (
    <StyledInfoControls>
      <div style={{ whiteSpace: 'nowrap' }}>SELECT SIZE</div>
      <MainButton
        isInCart={isInCart}
        title={isInCart ? 'In cart' : 'Add to cart'}
        onClick={() => console.log(id)}
      />
    </StyledInfoControls>
  );
};
