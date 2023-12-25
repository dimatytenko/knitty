import { ImageComponent } from '../../ui-kit/ImageComponent/Index';
import { StyledPhotosBlock } from './styles';
import { IPhotosBlockProps } from './types';

export const PhotosBlock = ({ list }: IPhotosBlockProps) => {
  return (
    <StyledPhotosBlock>
      {list.map(({ id, image }) => (
        <ImageComponent key={id} image={ image} alt="model" />
      ))}
    </StyledPhotosBlock>
  );
};
