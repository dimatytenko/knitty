import { useState, useCallback } from 'react';
import { Text1Bold } from '../../ui-kit/Typography';
import { StyledLangSwitcherWrapper } from './styled';

export const LangSwitcherComponent = () => {
  const [activeLang, setActiveLang] = useState<number>(1);

  const onClick = useCallback(
    (idx: number) => setActiveLang(idx),
    [setActiveLang],
  );

  return (
    <StyledLangSwitcherWrapper>
      <button
        className={activeLang === 0 ? 'active' : undefined}
        type="button"
        onClick={() => onClick(0)}
      >
        <Text1Bold>ukr</Text1Bold>
      </button>
      <button
        className={activeLang === 1 ? 'active' : undefined}
        type="button"
        onClick={() => onClick(1)}
      >
        <Text1Bold>eng</Text1Bold>
      </button>
    </StyledLangSwitcherWrapper>
  );
};
