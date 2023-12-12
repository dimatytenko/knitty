import { StyledPhotosBlock } from './styles';
import { IPhotosBlockProps } from './types';

export const PhotosBlock = ({ list }: IPhotosBlockProps) => {
  return (
    <StyledPhotosBlock>
      {list.map((el, idx) => (
        <img key={idx} src={el} alt="model" />
      ))}
    </StyledPhotosBlock>
  );
};
