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

import Header from '@src/common/components/header/Header';
import CanvasHtmlContent from '@src/common/components/canvasHtmlContent/CanvasHtmlContent';
import SofaBedModel from '@feature/components/model/SofaBed';
import DylanArmchairModel from '@feature/components/model/DylanArmchair';
import RockingChairModel from '@feature/components/model/RockingChair';
import LargeChair from '@feature/components/model/LargeChair';

/**
 * 메인페이지
 * @returns JSX.Element
 */
const MainPage = () => {
  return (
    <>
      <Header />
      <CanvasHtmlContent
        title='Rocking Chair'
        positionY={-1.7}
        rotation={{
          x: 0.3,
          y: 0,
          z: 0,
        }}
        bgColor='tomato'
      >
        <RockingChairModel scale={0.05} />
      </CanvasHtmlContent>
      <CanvasHtmlContent
        title='Dylan Armchair'
        positionY={-1.6}
        rotation={{
          x: 0.2,
          y: 0,
          z: 0,
        }}
        bgColor='#571ec1'
      >
        <DylanArmchairModel scale={0.05} />
      </CanvasHtmlContent>
      <CanvasHtmlContent
        title='Ottoman Chair'
        positionY={-1.6}
        rotation={{
          x: 0.2,
          y: 0,
          z: 0,
        }}
        bgColor='#636567'
      >
        <LargeChair scale={0.05} />
      </CanvasHtmlContent>
      <CanvasHtmlContent
        title='Sofa Bed'
        positionY={-1.6}
        rotation={{
          x: 0.2,
          y: 0,
          z: 0,
        }}
        bgColor='green'
      >
        <SofaBedModel scale={0.05} />
      </CanvasHtmlContent>
    </>
  );
};

export default MainPage;
