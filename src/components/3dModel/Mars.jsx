import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/mars.glb');
  const marsRef = useRef();

  useFrame(() => {
    marsRef.current.rotation.y -= -0.003;
  });
  return (
    <group {...props} dispose={null} ref={marsRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Mars_LOD0_MarsLOD1_0.geometry} material={materials.MarsLOD1} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/mars.glb');

export const Mars3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 25, position: [0, 10, 15] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1.5} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
