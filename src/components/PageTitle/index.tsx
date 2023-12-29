import { Br } from '../../ui-kit/Br';
import { Heading2, Text2Bold } from '../../ui-kit/Typography';
import { StyledPageTitleWrapper } from './styles';
import { IProps } from './types';

export const PageTitle = ({ title, text, count }: IProps) => {
  return (
    <>
      <StyledPageTitleWrapper>
        <Heading2>{title}</Heading2>
        <Br desktop={30} mobile={30} />
        <Text2Bold>({count})</Text2Bold>
      </StyledPageTitleWrapper>
      {text}
      <Br desktop={40} mobile={40} />
    </>
  );
};
