import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/saturn.glb');
  const saturnRef = useRef();

  useFrame(() => {
    saturnRef.current.rotation.y -= -0.001;
  });

  return (
    <group {...props} dispose={null} ref={saturnRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0.24, 0]} scale={163.36}>
            <mesh geometry={nodes.Circle_ring_0.geometry} material={materials.ring} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/saturn.glb');

export const Saturn3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 100, position: [60, 40, 250] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
