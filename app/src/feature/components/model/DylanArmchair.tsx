// =============================================================================
// File    :  DylanArmchairModel.tsx
// Class   :
// Purpose :  DylanArmchairModel
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type DylanArmchairGLTFResult = GLTF & {
  nodes: {
    ['Dylan_Armchair_WOOD_0']: THREE.Mesh;
    ['Dylan_Armchair_FABRIC_0']: THREE.Mesh;
    ['Plane001_FLOOR_0']: THREE.Mesh;
  };
  materials: {
    ['FABRIC']: THREE.Material;
    ['WOOD']: THREE.Material;
    ['FLOOR']: THREE.Material;
  };
};

/**
 * DylanArmchair 3d 모델
 * @param JSX.IntrinsicElements ['group']
 * @returns EmotionJSX.Element
 */
const DylanArmchairModel = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/dylanArmchair.gltf'
  ) as DylanArmchairGLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.477, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Dylan_Armchair_WOOD_0.geometry}
          material={materials.WOOD}
        />
        <mesh
          geometry={nodes.Dylan_Armchair_FABRIC_0.geometry}
          material={materials.FABRIC}
        >
          <meshPhysicalMaterial color='blue' />
        </mesh>
      </group>
      <mesh
        geometry={nodes.Plane001_FLOOR_0.geometry}
        material={materials.FLOOR}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/dylanArmchair.gltf');

export default DylanArmchairModel;
