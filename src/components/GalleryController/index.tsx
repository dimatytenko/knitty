import { TagsRowComponent } from '../../components/TagsRow';
import { Sort } from '../Sort';
import { StyledWrapper } from './styles';
import { IProps } from './types';

export const GalleryController = ({
  loading,
  filters,
  activeFilter,
}: IProps) => {
  return (
    <StyledWrapper>
      <TagsRowComponent
        loading={loading}
        filters={filters}
        activeFilter={activeFilter}
      />
      <Sort />
    </StyledWrapper>
  );
};
