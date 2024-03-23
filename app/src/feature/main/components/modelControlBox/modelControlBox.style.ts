// =============================================================================
// File    : modelControlBox.style.ts
// Class   :
// Purpose : modelControlBox.style.ts 스타일
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { css } from '@emotion/react';

export const Wrapper = css`
  position: fixed;
  width: 50%;
  height: 100%;
  z-index: 1000;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

export const Content = css`
  position: relative;
  background-color: #fff;
  width: calc(100% - 40px);
  height: calc(45% - 40px);
  padding: 20px;
  border-radius: 15px;
  right: 20px;

  .titleBox {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    h3 {
      font-weight: bold;
    }
  }

  .closeBtnBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-left: auto;
    cursor: pointer;
  }
  .closeBtn {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
`;

export const detailContent = css`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: center;
`;

export const ColorContentBox = css`
  height: auto;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  h3 {
    font-weight: bold;
  }

  .colorSelectBox {
    width: calc(100% - 40px);
    height: auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
  }
`;

export const ControlBox = css`
  width: 100%;
  /* height: 100px; */
  /* border: 1px solid red; */
  h3 {
    font-weight: bold;
  }
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .btnBox {
    display: flex;
  }
`;

export const topContent = css`
  display: flex;
  width: 100%;
`;
