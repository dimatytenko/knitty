import type { MenuProps } from 'antd';
import { DropdownProps } from 'antd/lib/dropdown';

import { WithChildren } from '../../types/helpers';
import { StyledDropdown } from './styles';

export type MenuMoreProps = {
  items: MenuProps['items'];
  onClick?: (sort: string) => void;
};

export const MenuMore: React.FC<
  DropdownProps & MenuMoreProps & WithChildren
> = ({ items, children, ...props }) => {
  return (
    <StyledDropdown menu={{ items }} trigger={['click']} {...props}>
      {children}
    </StyledDropdown>
  );
};
