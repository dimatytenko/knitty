import { Text2Bold, Span } from '../../../ui-kit/Typography';
// import { listRight } from '../../Layout/constants';
import { NavList } from '../NavList';
import { StyledFavLink } from '../styles';
import { IProps } from './types';
import { CartButton } from '../../../ui-kit/Buttons';
import { useContext } from 'react';
import { GlobalStore } from '../../../context/GlobalStore';

export const HeaderBlockBottomRight = ({ favList, color }: IProps) => {
  const {
    globalState: { categories },
  } = useContext(GlobalStore)!;
  return (
    <>
      <NavList list={categories ? categories.slice(3, 5) : []} color={color} />
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
