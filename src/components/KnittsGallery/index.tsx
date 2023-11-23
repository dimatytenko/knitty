// import { Button } from 'antd';
import { GloballyWrapper, ContentWrapper, ImageWrapper } from './styles';
// import ImageDecor from '../KnittsGallery/Image/Frame.svg';
import ImgHeader1 from '../KnittsGallery/Image/ImgHeader1.svg';
import ImgHeader2 from '../KnittsGallery/Image/ImgHeader2.svg';
import { LinkWithArrow } from '../../ui-kit/Links';

export const KnittsGalleryComponent = () => {
  return (
    <GloballyWrapper>
      <ContentWrapper>
        <ImageWrapper>
          {' '}
          <img src={ImgHeader1} alt="images-header" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={ImgHeader2} alt="images-header" />
        </ImageWrapper>
        <LinkWithArrow to="/">see all knits</LinkWithArrow>
      </ContentWrapper>
    </GloballyWrapper>
  );
};
