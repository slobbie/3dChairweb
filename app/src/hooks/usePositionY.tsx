// =============================================================================
// File    :  usePositionY.tsx
// Class   :
// Purpose :  usePositionY
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

/**
 * position y 계산 hook
 * @returns React.JSX.Element
 */
const usePositionY = () => {
  const positionCalculate = (y1: number, y2: number, y3: number) => {
    return y1 * (1 - y3) + y2 * y3;
  };
  return { positionCalculate };
};

export default usePositionY;
