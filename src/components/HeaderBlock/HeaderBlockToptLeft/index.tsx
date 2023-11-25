import { MainLink } from '../../../ui-kit/Links';
import { VerticalSeparator } from '../../../ui-kit/VerticalSeparator';
import { SearchBarComponent } from '../../SearchBar';

export const HeaderBlockTopLeft = () => {
  return (
    <>
      <VerticalSeparator>
        <MainLink to="/help">Help</MainLink>
      </VerticalSeparator>
      <SearchBarComponent />
    </>
  );
};
