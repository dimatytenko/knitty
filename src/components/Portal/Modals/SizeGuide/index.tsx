import { Text2Bold } from '../../../../ui-kit/Typography';
import { SizeGuideControls } from './Controls';
import { TableComponent } from './Table';
import { SizeGuideProvider } from './context/context';
import { StyledSizeGuide } from './styles';

export const SizeGuideModal = () => {
  return (
    <SizeGuideProvider>
      <StyledSizeGuide>
        <Text2Bold $case="uppercase">
          SIZE guide and detailed measurements
        </Text2Bold>
        <SizeGuideControls />
        <TableComponent />
      </StyledSizeGuide>
    </SizeGuideProvider>
  );
};
