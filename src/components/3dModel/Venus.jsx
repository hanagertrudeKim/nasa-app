import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/venus.glb');
  const venusRef = useRef();

  useFrame(() => {
    venusRef.current.rotation.y -= -0.001;
  });

  return (
    <group {...props} dispose={null} ref={venusRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} />
      </group>
    </group>
  );
}

useGLTF.preload('/venus.glb');

export const Venus3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 7, position: [15, 15, 15] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
