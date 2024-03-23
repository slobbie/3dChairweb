// =============================================================================
// File    :  useBodyScroll.tsx
// Class   :
// Purpose :  useBodyScroll
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { useCallback } from 'react';

/**
 * 스크롤 제어 hooks
 * @returns lockScroll
 * @returns openScroll
 */
const useBodyScroll = () => {
  /**
   * 스크롤 제한 함수
   */
  const lockScroll = useCallback((bgColor?: string) => {
    document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      background-color: ${bgColor};
      `;
  }, []);

  /**
   * 스크롤 활성화 함수
   */
  const openScroll = useCallback((bgColor?: string) => {
    const scrollY = document.body.style.top;
    document.body.style.cssText = `
      background-color: ${bgColor};
    `;
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  }, []);

  return { lockScroll, openScroll };
};

export default useBodyScroll;
