import React from 'react';

import { TagsRowComponent } from '../../components/TagsRow';
import { Sort } from '../../ui-kit/Sort';
import { IFilters } from '../../hooks/useFilters/types';
import { StyledWrapper } from './styles';

interface IGalleryController {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export const GalleryController: React.FC<IGalleryController> = ({
  setFilters,
}) => {
  return (
    <StyledWrapper>
      <TagsRowComponent setFilters={setFilters} />
      <Sort setFilters={setFilters} />
    </StyledWrapper>
  );
};
