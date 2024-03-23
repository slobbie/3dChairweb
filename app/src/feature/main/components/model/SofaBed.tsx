// =============================================================================
// File    :  SofaBedModel.tsx
// Class   :
// Purpose :  SofaBedModel
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { useGLTF } from '@react-three/drei';
import useModelData from '@src/feature/main/hooks/useModelData';
import { useMemo } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type TSofaBedModelGLTFResult = GLTF & {
  nodes: {
    ['Plane001_FLOOR_0']: THREE.Mesh;
    ['FABRIC001_FABRIC_0']: THREE.Mesh;
    ['FABRIC_BLACK001_FABRIC_BLACK_0']: THREE.Mesh;
    ['STEEL001_STEEL_0']: THREE.Mesh;
    ['Dylan_Armchair_FABRIC_0']: THREE.Mesh;
    ['PLASTIC001_PLASTIC_0']: THREE.Mesh;
  };
  materials: {
    ['FABRIC']: THREE.Material;
    ['FABRIC_BLACK']: THREE.Material;
    ['PLASTIC']: THREE.Material;
    ['STEEL']: THREE.Material;
    ['FLOOR']: THREE.Material;
  };
};

/**
 * DylanArmchair 3d 모델
 * @param JSX.IntrinsicElements ['group']
 * @returns EmotionJSX.Element
 */
const SofaBedModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/sofaBed.gltf'
  ) as TSofaBedModelGLTFResult;

  /** 현재 선택된 3d 모델  데이터 */
  const currentModelData = useModelData();

  /** 현재 선택된 색상 */
  const currentColor = useMemo(() => {
    return currentModelData ? currentModelData.color : 'black';
  }, [currentModelData]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane001_FLOOR_0.geometry}
        material={materials.FLOOR}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.FABRIC001_FABRIC_0.geometry}
        material={materials.FABRIC}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhysicalMaterial color={currentColor} />
      </mesh>
      <mesh
        geometry={nodes.FABRIC_BLACK001_FABRIC_BLACK_0.geometry}
        material={materials.FABRIC_BLACK}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhysicalMaterial color='blue' />
      </mesh>
      <mesh
        geometry={nodes.STEEL001_STEEL_0.geometry}
        material={materials.STEEL}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.PLASTIC001_PLASTIC_0.geometry}
        material={materials.PLASTIC}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/sofaBed.gltf');

export default SofaBedModel;
