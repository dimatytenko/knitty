import { MainLink } from '../../ui-kit/Links';
import { VerticalSeparator } from '../../ui-kit/VerticalSeparator';

export const HeaderBlockLeft = () => {
  return (
    <>
      <VerticalSeparator>
        <MainLink to="/help">Help</MainLink>
      </VerticalSeparator>
    </>
  );
};
