import {
  Args,
  MeshWobbleMaterial,
  OrbitControls,
  softShadows,
} from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useSpring, a } from '@react-spring//three';
import { Canvas, useFrame, Vector3 } from 'react-three-fiber';

interface IProps {
  position?: Vector3;
  args?: Args<any>;
  color?: string;
  speed?: number;
}
// soft Shadows
softShadows();

function SpinningBox(props: IProps) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const Spring: any = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={props.position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={Spring.scale}
      castShadow={true}
    >
      <boxBufferGeometry attach='geometry' args={props.args} />
      <MeshWobbleMaterial
        attach='material'
        color={props.color}
        speed={props.speed}
        factor={0.6}
      />
    </a.mesh>
  );
}

const MoveBox = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
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
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>

          <SpinningBox
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color='lightblue'
            speed={2}
          />
          <SpinningBox position={[-2, 1, -5]} color='pink' speed={6} />
          <SpinningBox position={[5, 1, -2]} color='pink' speed={6} />
        </group>

        <OrbitControls />
      </Canvas>
    </>
  );
};

export default MoveBox;
