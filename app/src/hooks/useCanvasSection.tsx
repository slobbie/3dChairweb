// =============================================================================
// File    :  useCanvaSection.tsx
// Class   :
// Purpose :  useCanvaSection
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================
import { canvasState, offsetState } from '@src/atom/common/canvasAtom';
import { useThree } from 'react-three-fiber';
import { useRecoilValue } from 'recoil';

/**
 *
 * @param
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const useCanvasSection = () => {
  const { sections, pages, zoom } = useRecoilValue(canvasState);
  const { size, viewport } = useThree();
  const offset = useRecoilValue(offsetState);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth / zoom;
  const canvasHeight = viewportHeight / zoom;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const aspect = size.height / viewportHeight;
  return {
    aspect,
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
  };
};

export default useCanvasSection;
