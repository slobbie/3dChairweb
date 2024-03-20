// =============================================================================
// File    :  MainPage.tsx
// Class   :
// Purpose :  MainPage
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================
/** @jsxImportSource @emotion/react */

// import * as mainPageStyle from '@feature/main/styles/mainPage.style';
import { Canvas } from 'react-three-fiber';
import { Html, RoundedBox } from 'drei';
import Header from '@src/common/components/header/Header';

/**
 * 메인페이지
 * @returns JSX.Element
 */
const MainPage = () => {
  return (
    <>
      <Header />
      <Canvas
        style={{ height: '100vh', backgroundColor: 'tomato', zIndex: 100 }}
        legacy
        camera={{ position: [0, 0, 10], fov: 70 }}
      >
        <Html fullscreen>
          {/* <div
            css={mainPageStyle.container}
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: 'tomato',
            }}
          >
            <h1 css={mainPageStyle.title}>안녕</h1>
          </div> */}
        </Html>
      </Canvas>
    </>
  );
};

export default MainPage;
