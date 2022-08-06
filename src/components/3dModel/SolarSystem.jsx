import React, { Suspense, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/solar_system.glb');
  const solarSystemRef = useRef();

  useFrame(() => {
    solarSystemRef.current.rotation.y -= -0.0007;
    solarSystemRef.current.rotation.x -= -0.001;
  });

  return (
    <group {...props} dispose={null} ref={solarSystemRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Sol1_lambert2_0.geometry} material={materials.lambert2} />
          <mesh geometry={nodes.Sol1_lambert3_0.geometry} material={materials.lambert3} />
          <mesh geometry={nodes.Sol1_lambert4_0.geometry} material={materials.lambert4} />
          <mesh geometry={nodes.Sol1_lambert5_0.geometry} material={materials.lambert5} />
          <mesh geometry={nodes.Sol1_lambert6_0.geometry} material={materials.lambert6} />
          <mesh geometry={nodes.Sol1_lambert7_0.geometry} material={materials.lambert7} />
          <mesh geometry={nodes.Sol1_lambert10_0.geometry} material={materials.lambert10} />
          <mesh geometry={nodes.Sol1_lambert11_0.geometry} material={materials.lambert11} />
          <mesh geometry={nodes.Sol1_lambert12_0.geometry} material={materials.lambert12} />
          <mesh geometry={nodes.Sol1_lambert13_0.geometry} material={materials.lambert13} />
          <mesh geometry={nodes.Sol1_lambert9_0.geometry} material={materials.lambert9} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/solar_system.glb');

export const SolarSystem3dModel = () => {
  return (
    <>
      <Canvas
        camera={{ fov: 75, position: [620, 100, 600] }}
        style={{ background: 'transeparent' }}
      >
        <Suspense>
          <ambientLight intensity={1} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
