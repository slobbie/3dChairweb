// =============================================================================
// File    :  CanvasHtmlContent.tsx
// Class   :
// Purpose :  CanvasHtmlContent
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import * as THREE from 'three';
import * as mainPageStyle from '@feature/main/styles/mainPage.style';
import * as Style from '@src/feature/main/components/canvasHtmlContent/canvasHtmlContent.style';
import { Canvas } from '@react-three/fiber';
import { Suspense, useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ButtonCommon from '@common/components/button/ButtonCommon';
import Space from '@common/components/space/Space';
import {
  currentModelKey,
  isModelControlBox,
} from '@src/atom/common/3dModelAtom';
import { useSetRecoilState } from 'recoil';
import useCamelCase from '@src/hooks/useCamelCase';
import useBodyScroll from '@src/hooks/useBodyScroll';

interface ICanvasHtmlContent {
  title: string;
  bgColor: string;
  positionY: number;
  isPaly: boolean;
  playRest: boolean;
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  children: React.ReactNode;
}

/**
 * canvas 에 그려질 html 컨텐츠
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const CanvasHtmlContent = ({
  title,
  bgColor,
  rotation,
  positionY,
  isPaly,
  playRest,
  children,
}: ICanvasHtmlContent) => {
  const selectedMesh = useRef<THREE.Mesh | null>(null);
  /** modelControlBox 상태 */
  const setShowModelControlBox = useSetRecoilState(isModelControlBox);
  /** 문자열 카멜케이스로 변환 */
  const camelCase = useCamelCase;
  /** modelControlBox 상태 */
  const setCurrentModel = useSetRecoilState(currentModelKey);
  const requestRef = useRef<number>(0);

  const scrollController = useBodyScroll();

  /** 3d 모델 컨트롤 박스 호출 함수 */
  const showModelControlBox = (pTitle: string) => {
    setShowModelControlBox((prev) => !prev);
    camelCase(pTitle);
    setCurrentModel(camelCase(pTitle));
    scrollController.lockScroll(bgColor);
  };

  /** 3d 모델 회전 애니메이션 함수 */
  const animate = useCallback(() => {
    requestRef.current = requestAnimationFrame(animate);
    if (selectedMesh.current) {
      selectedMesh.current.rotation.y += 0.01;
    }
  }, []);

  // 3d 모델 회전 이펙트
  useEffect(() => {
    if (isPaly) {
      animate();
    } else {
      cancelAnimationFrame(requestRef.current);
    }
  }, [animate, isPaly]);

  // 3d 모델 포지션 리셋 이펙트
  useEffect(() => {
    if (playRest && selectedMesh.current) {
      selectedMesh.current.rotation.y = 0;
    }
  }, [playRest]);

  const [refItem, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [bgColor, inView]);

  return (
    <div
      css={mainPageStyle.container}
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Suspense fallback={null}>
        <Canvas legacy camera={{ position: [0, 0, 11], fov: 70 }}>
          <directionalLight intensity={10} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
          <group
            position={[0, positionY, 0]}
            rotation-x={rotation.x}
            rotation-y={rotation.y}
            rotation-z={rotation.z}
          >
            <mesh ref={selectedMesh} position={[0, 0, 0]}>
              {children}
            </mesh>
          </group>
        </Canvas>
      </Suspense>
      <div css={Style.Content}>
        <h1 ref={refItem} css={mainPageStyle.title}>
          {title}
        </h1>
        <Space bottom={50} />
        <ButtonCommon onClick={() => showModelControlBox(title)} size='M'>
          View
        </ButtonCommon>
      </div>
    </div>
  );
};

export default CanvasHtmlContent;
