import { Text2Bold, Span } from '../../../ui-kit/Typography';
import { NavList } from '../NavList';
import { StyledFavLink } from '../styles';
import { IProps } from './types';
import { CartButton } from '../../../ui-kit/Buttons';
import { useContext } from 'react';
import { GlobalStore } from '../../../context/GlobalStore';
import { useTranslation } from 'react-i18next';

export const HeaderBlockBottomRight = ({ favList, color }: IProps) => {
  const { t } = useTranslation();
  const {
    globalState: { categories },
  } = useContext(GlobalStore)!;

  return (
    <>
      <NavList list={categories ? categories.slice(3, 5) : []} color={color} />
      <StyledFavLink to="/favorites">
        <Text2Bold $case="uppercase" color={color}>
          {t('common.favorites')}
        </Text2Bold>
        {!favList.length ? null : <Span color={color}>{favList.length}</Span>}
      </StyledFavLink>

      <CartButton color={color} />
    </>
  );
};
