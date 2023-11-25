import { StyledHeaderTop } from './HeaderBlockToptLeft/styles';
import { StyledHeaderBlock, StyledHeaderBottom } from './styles';
import { IProps } from './types';

export const HeaderBlockComponent = ({ renderTop, renderBottom }: IProps) => {
  return (
    <StyledHeaderBlock>
      <StyledHeaderTop>{renderTop}</StyledHeaderTop>
      <StyledHeaderBottom>{renderBottom}</StyledHeaderBottom>
    </StyledHeaderBlock>
  );
};
