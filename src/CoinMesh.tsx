import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
//import {OrbitControls} from '@react-three/drei';
function CoinMesh() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.1));
  return (
    <mesh ref={mesh} scale={1}>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach='material' />
    </mesh>
  );
}

const Meshes = () => {
  return (
    <Canvas>
      <CoinMesh />
    </Canvas>
  );
};

export default Meshes;
