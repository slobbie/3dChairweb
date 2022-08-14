import { Physics, useBox } from '@react-three/cannon';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
// import { Physics, useBox } from 'use-cannon';

//OrbitControls  은 캔버스에 줌인 줌 아웃 이동 및 기타 효과를 추가하는데 사용한다.
//https://www.npmjs.com/package/@react-three/drei

function Box() {
  const [ref, api]: any = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='#748CF1' />
    </mesh>
  );
}

function Plane() {
  const [ref]: any = useBox(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  );
}

const BoxContainer = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
};

export default BoxContainer;
