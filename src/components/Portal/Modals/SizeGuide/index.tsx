import { SizeGuideControls } from './Controls';
import { TableComponent } from './Table';
import { SizeGuideProvider } from './context/context';
import { StyledSizeGuide } from './styles';
import { IProps } from './types';
import { ModalTitle } from './ModalTitle';

export const SizeGuideModal = ({ setIsVisible }: IProps) => {
  return (
    <SizeGuideProvider>
      <StyledSizeGuide>
        <ModalTitle onClose={() => setIsVisible(false)} />
        <SizeGuideControls />
        <TableComponent />
      </StyledSizeGuide>
    </SizeGuideProvider>
  );
};
