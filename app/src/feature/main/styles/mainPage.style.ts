// =============================================================================
// File    : mainPage.style.ts
// Class   :
// Purpose : mainPage.style.ts 스타일
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { css } from '@emotion/react';

export const container = css`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const title = css`
  font-size: 10rem;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  span {
    display: block;
  }
  @media (max-width: 1440px) {
    font-size: 6rem;
  }
`;
