// =============================================================================
// File    :  LargeChair.tsx
// Class   :
// Purpose :  LargeChair
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type TLargeChairGLTFResult = GLTF & {
  nodes: {
    ['Branagh_Large_Ottoman_PearlGrey_FABRIC_0']: THREE.Mesh;
    ['Branagh_Large_Ottoman_PearlGrey_PLASTIC_0']: THREE.Mesh;
    ['Plane001_FLOOR_0']: THREE.Mesh;
  };
  materials: {
    ['FABRIC']: THREE.Material;
    ['PLASTIC']: THREE.Material;
    ['FLOOR']: THREE.Material;
  };
};

/**
 * LargeChair 3d 모델
 * @param JSX.IntrinsicElements ['group']
 * @returns EmotionJSX.Element
 */
const LargeChair = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/largeChair.gltf'
  ) as TLargeChairGLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 6.386, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Branagh_Large_Ottoman_PearlGrey_FABRIC_0.geometry}
          material={materials.FABRIC}
        >
          <meshPhysicalMaterial color='blue' />
        </mesh>
        <mesh
          geometry={nodes.Branagh_Large_Ottoman_PearlGrey_PLASTIC_0.geometry}
          material={materials.PLASTIC}
        />
      </group>
      <mesh
        geometry={nodes.Plane001_FLOOR_0.geometry}
        material={materials.FLOOR}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/largeChair.gltf');

export default LargeChair;
