// =============================================================================
// File    :  ModelControlBox.tsx
// Class   :
// Purpose :  ModelControlBox
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================
import { motion } from 'framer-motion';
import * as Styles from '@src/feature/main/components/modelControlBox/modelControlBox.style';
import ColorSelect from '../colorSelect/ColorSelect';
import {
  currentModelKey,
  isModelControlBox,
  modelState,
} from '@src/atom/common/3dModelAtom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { IoCloseOutline } from 'react-icons/io5';
import { FaRegPlayCircle } from 'react-icons/fa';
import { MdOutlineReplay } from 'react-icons/md';
import { FaRegCircleStop } from 'react-icons/fa6';
import Space from '@src/common/components/space/Space';
import { useMemo } from 'react';
import useBodyScroll from '@src/hooks/useBodyScroll';
import { colorSelectPlatte } from '@src/common/constants/colorSelectPlatte';
/**
 *
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const ModelControlBox = () => {
  /** 모델 컨트롤 박스 호출 함수 */
  const setShowModelControlBox = useSetRecoilState(isModelControlBox);
  /** 3d 모델 상태 */
  const [modelData, setModelData] = useRecoilState(modelState);
  /** 스크롤 이벤트 hook */
  const scrollController = useBodyScroll();

  /** 현재 선택된 3d 모델  상태 */
  const currentModel = useRecoilValue(currentModelKey);

  /** 현재 선택된 모델 find */
  const findModel = modelData?.find((find) => {
    return find.key === currentModel;
  });

  /** 컬러 선택 콜백 */
  const colorSelectCallback = (pBgColor: string) => {
    /** 기존 모델 데이터에서 현재 모델 컬러 변경 */
    setModelData((prev) => {
      const newModelData = prev.map((item) => {
        if (item.key === findModel?.key) {
          return {
            ...item,
            color: pBgColor,
          };
        }
        return item;
      });
      return newModelData;
    });
  };

  /** 3d 모델 회전 유무 설정 */
  const isModelRotationPlay = () => {
    /** 기존 모델 데이터 회전 유무 설정 */
    setModelData((prev) => {
      const newModelData = prev.map((item) => {
        if (item.key === findModel?.key) {
          return {
            ...item,
            isPlay: !item.isPlay,
            playReset: false,
          };
        }
        return item;
      });
      return newModelData;
    });
  };

  /** 3d 모델 회전 리셋 이벤트 */
  const playResetEvent = () => {
    setModelData((prev) => {
      const newModelData = prev.map((item) => {
        if (item.key === findModel?.key) {
          return {
            ...item,
            playReset: !item.playReset,
          };
        }
        return item;
      });
      return newModelData;
    });
  };

  /** ModelControlBox 숨김 이벤트 */
  const hideModelControlBox = (bgColor: string) => {
    setShowModelControlBox(false);
    scrollController.openScroll(bgColor);
  };

  /** 가구 설명 */
  const dec = useMemo(() => {
    return findModel?.dec as string;
  }, [findModel?.dec]);

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: 0.2 }}
      css={Styles.Wrapper}
    >
      <div css={Styles.Content}>
        <div css={Styles.topContent}>
          <div className='titleBox'>
            <h3>{findModel?.title}</h3>
          </div>
          <div className='closeBtnBox'>
            <button
              className='closeBtn'
              onClick={() => hideModelControlBox(findModel?.bgColor as string)}
            >
              <IoCloseOutline size={24} />
            </button>
          </div>
        </div>
        <div>
          <p>{dec}</p>
        </div>
        <div css={Styles.detailContent}>
          <div css={Styles.ColorContentBox}>
            <h3>Color</h3>
            <div className='colorSelectBox'>
              {colorSelectPlatte.map((item) => {
                return (
                  <ColorSelect
                    key={item.id}
                    colorsSelectCallback={colorSelectCallback}
                    bgColor={item.color}
                  />
                );
              })}
            </div>
          </div>
          <Space top={20} />
          <div css={Styles.ControlBox}>
            <h3>Control</h3>
            <Space top={10} />
            <div className='btnBox'>
              <button onClick={isModelRotationPlay}>
                {findModel?.isPlay ? (
                  <FaRegCircleStop size={24} />
                ) : (
                  <FaRegPlayCircle size={24} />
                )}
              </button>
              <Space right={10} />
              <button onClick={playResetEvent}>
                <MdOutlineReplay size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModelControlBox;
