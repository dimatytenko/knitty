import { TagsRowComponent } from '../../components/TagsRow';
import { Sort } from '../../ui-kit/Sort';
import { StyledWrapper } from './styles';

export const GalleryController = () => {
  return (
    <StyledWrapper>
      <TagsRowComponent />
      <Sort />
    </StyledWrapper>
  );
};
