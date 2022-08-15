import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from 'react-three-fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/jupiter.glb');
  const jupiterRef = useRef();

  useFrame(() => {
    jupiterRef.current.rotation.y -= -0.003;
  });

  return (
    <group {...props} dispose={null} ref={jupiterRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/jupiter.glb');

export const Jupiter3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 75, position: [150, 150, 50] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1.5} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
