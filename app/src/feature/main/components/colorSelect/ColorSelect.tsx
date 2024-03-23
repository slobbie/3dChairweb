// =============================================================================
// File    :  ColorSelect.tsx
// Class   :
// Purpose :  ColorSelect
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import * as Styles from '@src/feature/main/components/colorSelect/colorSelect.style';

interface IColorSelect {
  bgColor: string;
  colorsSelectCallback: (bgColor: string) => void;
}

/**
 * ColorSelect 컴포넌트
 * @property { string } bgColor color select bg colors
 * @property { (bgColor: string) => void; }  color select 콜백 이벤트
 * @returns React.JSX.Element
 */
const ColorSelect = ({ bgColor, colorsSelectCallback }: IColorSelect) => {
  return (
    <div
      onClick={() => {
        colorsSelectCallback(bgColor);
      }}
      css={Styles.content(bgColor)}
    />
  );
};

export default ColorSelect;
