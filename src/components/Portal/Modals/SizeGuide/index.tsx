import { Text2Bold } from '../../../../ui-kit/Typography';
import { SizeGuideControls } from './Controls';
import { TableComponent } from './Table';
import { StyledSizeGuide } from './styles';

export const SizeGuideModal = () => {
  return (
    <StyledSizeGuide>
      <Text2Bold $case="uppercase">
        SIZE guide and detailed measurements
      </Text2Bold>
      <SizeGuideControls />
      <TableComponent />
    </StyledSizeGuide>
  );
};
