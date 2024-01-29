import { Text2Bold } from '../../../../ui-kit/Typography';
import { ButtonClose } from '../Burger/ButtonClose';
import { SizeGuideControls } from './Controls';
import { TableComponent } from './Table';
import { SizeGuideProvider } from './context/context';
import { StyledSizeGuide } from './styles';
import { IProps } from './types';

export const SizeGuideModal = ({ setIsVisible }: IProps) => {
  return (
    <SizeGuideProvider>
      <StyledSizeGuide>
        <Text2Bold $case="uppercase">
          SIZE guide and detailed measurements
          <ButtonClose
            onClose={() => {
              setIsVisible(false);
            }}
          />
        </Text2Bold>
        <SizeGuideControls />
        <TableComponent />
      </StyledSizeGuide>
    </SizeGuideProvider>
  );
};
