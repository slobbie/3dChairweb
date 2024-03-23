// =============================================================================
// File    :  Space.tsx
// Class   :
// Purpose :  Space
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { useMemo } from 'react';

interface ISpaceProps {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

/**
 * 컴포넌트 사이에 마진 공백을 만들어주는 요소
 * @property { number } top margin top
 * @property { number } bottom margin bottom
 * @property { number } right margin right
 * @property { number } left margin left
 * @returns React.JSX.Element
 */
const Space = ({ top, bottom, right, left }: ISpaceProps) => {
  const spaceStyle = useMemo(
    () => ({
      marginTop: top ? top + 'px' : 0,
      marginBottom: bottom ? bottom + 'px' : 0,
      marginRight: right ? right + 'px' : 0,
      marginLeft: left ? left + 'px' : 0,
    }),
    [top, bottom, right, left]
  );

  return <div style={spaceStyle} />;
};

export default Space;
