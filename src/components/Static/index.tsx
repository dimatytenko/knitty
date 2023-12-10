import { IProps } from './types';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';

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
      <Container point={POINTS.l}>
        <StaticTitle>{data.title}</StaticTitle>
        <StaticSubtitle>{data.subtitle}</StaticSubtitle>
        {data.info.map((item, ind) => (
          <div key={ind.toString()}>
            <StaticTextBlock>{item.titleBlock}</StaticTextBlock>
            {item.text.map((text, ind) => (
              <StaticText key={ind.toString()}>{text}</StaticText>
            ))}
          </div>
        ))}
      </Container>
    </StaticWrapper>
  );
};
