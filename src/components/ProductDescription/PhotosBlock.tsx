import { ImageComponent } from '../../ui-kit/ImageComponent/Index';
import { StyledPhotosBlock, StyledPhotosList } from './styles';
import { IPhotosBlockProps } from './types';

export const PhotosBlock = ({ list }: IPhotosBlockProps) => {
  return (
    <StyledPhotosBlock>
      <StyledPhotosList>
        {list.map(({ id, image }) => (
          <ImageComponent key={id} image={image} alt="model" />
        ))}
      </StyledPhotosList>
    </StyledPhotosBlock>
  );
};
