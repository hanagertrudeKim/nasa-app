import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/uranus.glb');
  const uranusRef = useRef();

  useFrame(() => {
    uranusRef.current.rotation.y -= -0.003;
  });

  return (
    <group {...props} dispose={null} ref={uranusRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1.74}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
          </group>
          <group scale={2.38}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
          </group>
          <group scale={2.57}>
            <mesh geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
          </group>
          <group scale={2.76}>
            <mesh geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/uranus.glb');

export const Uranus3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 25, position: [10, 10, 5] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
