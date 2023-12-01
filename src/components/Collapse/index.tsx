import { IProps } from './types';
import { Text2Bold } from '../../ui-kit/Typography';
import { StyledCollaps } from './styles';
import { Panel } from './Panel';

export default function CollapseComponent({ list }: IProps) {
  return (
    <StyledCollaps>
      {list.map(({ title, text }, idx) => (
        <Panel
          key={idx}
          label={<Text2Bold $case="uppercase">{title}</Text2Bold>}
          text={
            <Text2Bold $case="uppercase" color="unfocus">
              {text}
            </Text2Bold>
          }
        />
      ))}
    </StyledCollaps>
  );
}
