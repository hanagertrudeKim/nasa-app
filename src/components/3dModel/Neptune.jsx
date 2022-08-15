import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/neptune.glb');
  const neptuneRef = useRef();

  useFrame(() => {
    neptuneRef.current.rotation.y -= -0.001;
  });

  return (
    <group {...props} dispose={null} ref={neptuneRef}>
      <group>
        <mesh geometry={nodes.Object_2.geometry} material={materials.moon} />
      </group>
    </group>
  );
}

useGLTF.preload('/neptune.glb');

export const Neptune3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 10, position: [0, 10, 15] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={0.7} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
