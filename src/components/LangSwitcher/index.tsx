import { useState, useCallback } from 'react';
import { StyledLangSwitcherWrapper, StyledText } from './styles';
import { TextColor } from '../../ui-kit/Typography/types';

interface IProps {
  color: TextColor;
}

export const LangSwitcherComponent: React.FC<IProps> = ({ color }) => {
  const [activeLang, setActiveLang] = useState<number>(1);

  const onClick = useCallback(
    (idx: number) => setActiveLang(idx),
    [setActiveLang],
  );

  return (
    <StyledLangSwitcherWrapper>
      <button
        className={activeLang !== 0 ? 'inAactive' : undefined}
        type="button"
        onClick={() => onClick(0)}
      >
        <StyledText color={color}>ukr</StyledText>
      </button>
      <button
        className={activeLang !== 1 ? 'inAactive' : undefined}
        type="button"
        onClick={() => onClick(1)}
      >
        <StyledText color={color}>eng</StyledText>
      </button>
    </StyledLangSwitcherWrapper>
  );
};
