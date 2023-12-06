import { Text2Bold, Span } from '../../../ui-kit/Typography';
import { listRight } from '../../Layout/constants';
import { NavList } from '../NavList';
import { StyledFavLink } from '../styles';
import { IProps } from './types';
import { CartButton } from '../../../ui-kit/Buttons';

export const HeaderBlockBottomRight = ({ favList, color }: IProps) => {
  return (
    <>
      <NavList list={listRight} color={color} />
      <StyledFavLink to="/favorites">
        <Text2Bold $case="uppercase" color={color}>
          Favorits
        </Text2Bold>
        {!favList.length ? null : <Span color={color}>{favList.length}</Span>}
      </StyledFavLink>

      <CartButton color={color} />
    </>
  );
};
