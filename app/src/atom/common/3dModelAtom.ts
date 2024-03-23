// =============================================================================
// File    : 3dModelAtom.ts
// Class   :
// Purpose : 3dModelAtom.ts
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { atom } from 'recoil';

/**
 * 3d 모델 컨트롤 박스 여부
 */
export const isModelControlBox = atom({
  key: 'isModelControlBox',
  default: false,
});

/**
 * 3d 모델 state
 */
export const modelState = atom({
  key: 'modelState',
  default: [
    {
      key: 'rockingChair',
      title: 'Rocking Chair',
      color: 'transparent',
      isPlay: false,
      playReset: false,
      bgColor: 'tomato',
      dec: '전통적인 디자인과 편안한 흔들림으로 휴식을 제공합니다. 내구성 있는 재료로 제작되어 공간을 아름답게 꾸며줍니다.',
    },
    {
      key: 'dylanArmchair',
      title: 'Dylan Armchair',
      color: 'transparent',
      isPlay: false,
      playReset: false,
      bgColor: '#571ec1',
      dec: '편안한 디자인과 뛰어난 품질로 제작된 안락 의자로, 휴식과 스타일을 동시에 제공합니다. 집안의 모든 공간을 더욱 편안하고 아름답게 만들어줍니다.',
    },
    {
      key: 'ottomanChair',
      title: 'Ottoman Chair',
      color: 'transparent',
      isPlay: false,
      playReset: false,
      bgColor: '#636567',
      dec: '현대적인 스타일과 편안한 디자인이 결합된 현대적인 의자로, 다양한 공간에 완벽하게 어울립니다. 이 의자는 플러시한 패브릭과 튼튼한 구조로 최적의 휴식을 제공합니다.',
    },
    {
      key: 'sofaBed',
      title: 'Sofa Bed',
      color: 'transparent',
      isPlay: false,
      playReset: false,
      bgColor: 'green',
      dec: '스타일리시한 소파로서의 역할과 편안한 침대로의 변환을 완벽하게 결합한 제품입니다. 공간 활용을 극대화하며 손쉽게 소파에서 침대로 변환하여 휴식을 즐길 수 있습니다.',
    },
  ],
});

/**
 * 현재  3d 모델 key
 */
export const currentModelKey = atom({
  key: 'currentModelKey',
  default: '',
});
