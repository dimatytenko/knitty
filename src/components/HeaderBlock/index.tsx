import { StyledHeaderTop } from './HeaderBlockToptLeft/styles';
import { StyledHeaderBlock, StyledHeaderBottom } from './styles';
import { IProps } from './types';

export const HeaderBlockComponent = ({
  renderTop,
  renderBottom,
  color,
}: IProps) => {
  return (
    <StyledHeaderBlock>
      <StyledHeaderTop color={color}>{renderTop}</StyledHeaderTop>
      <StyledHeaderBottom>{renderBottom}</StyledHeaderBottom>
    </StyledHeaderBlock>
  );
};
