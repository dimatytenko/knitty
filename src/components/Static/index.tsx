import { IProps } from './types';
import { Container } from '../Layout/styles';
import {
  StaticWrapper,
  StaticTitle,
  StaticSubtitle,
  StaticText,
  StaticTextBlock,
} from './styles';

export const Static: React.FC<IProps> = ({ data }) => {
  return (
    <StaticWrapper>
      <Container>
        <StaticTitle>{data.title}</StaticTitle>
        <StaticSubtitle>{data.subtitle}</StaticSubtitle>
        {data.info.map((item) => (
          <div key={item.titleBlock}>
            <StaticTextBlock>{item.titleBlock}</StaticTextBlock>
            {item.text.map((text) => (
              <StaticText key={text}>{text}</StaticText>
            ))}
          </div>
        ))}
      </Container>
    </StaticWrapper>
  );
};
