// =============================================================================
// File    : colorSelect.style.ts
// Class   :
// Purpose : colorSelect.style.ts 스타일
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { css } from '@emotion/react';

export const content = (bgColor: string) => {
  return css`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${bgColor};
  `;
};
