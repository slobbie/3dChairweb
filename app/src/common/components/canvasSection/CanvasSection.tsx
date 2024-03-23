// =============================================================================
// File    :  CanvasSection.tsx
// Class   :
// Purpose :  CanvasSection
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { canvasState, offsetState } from '@src/atom/common/canvasAtom';
import useCanvasSection from '@src/hooks/useCanvasSection';
import usePositionY from '@src/hooks/usePositionY';
import { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface ICanvasSection {
  offset: number;
  factor: number;
  children: React.ReactNode;
}

/**
 * 캔버스 section 컴포넌트
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const CanvasSection = ({
  offset,
  factor,
  children,
  ...props
}: ICanvasSection) => {
  const { offset: parentOffset, sectionHeight, aspect } = useCanvasSection();
  const { zoom, top } = useRecoilValue(canvasState);
  const setOffset = useSetRecoilState(offsetState);

  const groupRef = useRef<any>();

  const positionY = usePositionY();

  offset = offset !== undefined ? offset : parentOffset;

  // useEffect(() => {
  //   setOffset(offset);
  // }, [offset]);

  useFrame(() => {
    const curY = groupRef.current.position.y;
    const curTop = top.current / aspect;
    groupRef.current.position.y = positionY.positionCalculate(
      curY,
      (curTop / zoom) * factor,
      0.1
    );
  });

  return (
    <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
      <group ref={groupRef}>{children}</group>
    </group>
  );
};

export default CanvasSection;
