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

import CanvasHtmlContent from '@src/feature/main/components/canvasHtmlContent/CanvasHtmlContent';
import SofaBedModel from '@src/feature/main/components/model/SofaBed';
import DylanArmchairModel from '@src/feature/main/components/model/DylanArmchair';
import RockingChairModel from '@src/feature/main/components/model/RockingChair';
import LargeChair from '@src/feature/main/components/model/LargeChair';
import ModelControlBox from '@src/feature/main/components/modelControlBox/ModelControlBox';
import { useRecoilValue } from 'recoil';
import { isModelControlBox, modelState } from '@src/atom/common/3dModelAtom';
import { useMemo } from 'react';

/**
 * 메인페이지
 * @returns JSX.Element
 */
const MainPage = () => {
  const isShowModelControlBox = useRecoilValue(isModelControlBox);
  /** 3d 모델  상태 */
  const modelData = useRecoilValue(modelState);

  const ModelMap = useMemo(
    () =>
      Object.freeze([
        <RockingChairModel scale={0.05} />,
        <DylanArmchairModel scale={0.05} />,
        <LargeChair scale={0.05} />,
        <SofaBedModel scale={0.05} />,
      ]),
    []
  );

  return (
    <>
      {modelData.map((item, i) => {
        return (
          <CanvasHtmlContent
            title='Rocking Chair'
            isPaly={item.isPlay}
            playRest={item.playReset}
            positionY={-1.7}
            rotation={{
              x: 0.3,
              y: 0,
              z: 0,
            }}
            bgColor={item.bgColor}
          >
            {ModelMap[i]}
          </CanvasHtmlContent>
        );
      })}
      {isShowModelControlBox && <ModelControlBox />}
    </>
  );
};

export default MainPage;
