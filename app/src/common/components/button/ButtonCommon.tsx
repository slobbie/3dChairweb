// =============================================================================
// File    :  ButtonCommon.tsx
// Class   :
// Purpose :  ButtonCommon
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import * as buttonStyle from '@common/components/button/styles/buttonCommon';
import { MotionProps, motion } from 'framer-motion';

import React, { ButtonHTMLAttributes, Ref, forwardRef, useMemo } from 'react';

export type buttonSize = 'S' | 'M' | 'L';
export type Variant = 'primaryStyle' | 'outlineStyle';

export interface IButtonProps
  extends Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    >,
    MotionProps {
  /**
   * 정의된 버튼 사이즈
   */
  size?: buttonSize;
  /**
   *  버튼 안에 들어올 컨텐츠
   */
  children?: React.ReactNode | string;
  /**
   *  버튼 html type
   */
  htmlType?: 'button' | 'reset' | 'submit';
}

/**
 *
 * @property { IButtonProps }
 * @returns React.JSX.Element
 */
const ButtonCommon = forwardRef(function ButtonCommon(
  props: IButtonProps,
  forwardRef: Ref<HTMLButtonElement>
) {
  const { size = 'M', htmlType, children, ...rest } = props;

  /** 버튼 호버 스타일 */
  const hoverStyle = useMemo(() => ({ scale: 1.05 }), []);

  /** 버튼 트랜지션 스타일 */
  const transitionStyle = useMemo(
    () => ({ type: 'spring', stiffness: 400, damping: 10 }),
    []
  );

  return (
    <motion.button
      css={buttonStyle.buttonCommonStyle(size)}
      ref={forwardRef}
      type={htmlType}
      whileHover={hoverStyle}
      transition={transitionStyle}
      {...rest}
    >
      {children}
    </motion.button>
  );
});

export default ButtonCommon;
