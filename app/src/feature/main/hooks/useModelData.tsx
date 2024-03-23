// =============================================================================
// File    :  useModelData.tsx
// Class   :
// Purpose :  useModelData
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { currentModelKey, modelState } from '@src/atom/common/3dModelAtom';
import { useRecoilValue } from 'recoil';

/**
 * 3d 모델 데이터 hooks
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const useModelData = () => {
  /** 3d 모델  상태 */
  const modelData = useRecoilValue(modelState);
  /** 현재 선택된 3d 모델  상태 */
  const currentModel = useRecoilValue(currentModelKey);
  /** 기존 3d 데이터 배열에서 현재 키를 찾음 */
  const findModel = modelData.find((item) => {
    return item.key === currentModel;
  });
  return findModel;
};

export default useModelData;
