import React, { useRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, Canvas } from 'react-three-fiber';

function Model(props) {
  const { nodes, materials } = useGLTF('/earth.glb');
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y -= -0.003;
  });

  return (
    <group {...props} dispose={null} ref={earthRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['Material.004']} />
        <group scale={1.02}>
          <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.005']} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/earth.glb');

export const Earth3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 11, position: [0, 10, 15] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1.5} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
