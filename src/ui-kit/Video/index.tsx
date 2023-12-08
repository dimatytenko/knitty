import { StyledVideo } from './styles';
import { IProps } from './types';

export const Video = ({ src }: IProps) => {
  return (
    <StyledVideo autoPlay loop muted playsInline>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );
};
