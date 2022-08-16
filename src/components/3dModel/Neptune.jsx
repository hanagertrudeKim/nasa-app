import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/neptune.glb');
  const neptuneRef = useRef();

  useFrame(() => {
    neptuneRef.current.rotation.y -= -0.003;
  });

  return (
    <group {...props} dispose={null} ref={neptuneRef}>
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

useGLTF.preload('/neptune.glb');

export const Neptune3dModel = () => {
  return (
    <>
      <Canvas
        camera={{ fov: 80, position: [100, 100, 150] }}
        style={{ background: 'transeparent' }}
      >
        <Suspense>
          <ambientLight intensity={0.7} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
