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
import * as Style from '@common/components/canvasHtmlContent/canvasHtmlContent.style';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import ButtonCommon from '@common/components/button/ButtonCommon';

interface ICanvasHtmlContent {
  title: string;
  bgColor: string;
  positionY: number;
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
  children,
}: ICanvasHtmlContent) => {
  const selectedMesh = useRef<THREE.Mesh | null>(null);

  // const animate = useCallback(() => {
  //   requestAnimationFrame(animate);
  //   if (selectedMesh.current) {
  //     selectedMesh.current.rotation.y += 0.01;
  //   }
  // }, []);

  // useEffect(() => {
  //   animate();
  // }, [animate]);

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
          <OrbitControls />
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
        <ButtonCommon size='M'>Custom</ButtonCommon>
      </div>
    </div>
  );
};

export default CanvasHtmlContent;
