import React, { Suspense, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/mercury.glb');
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    group.current.rotation.y -= -0.003;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="MercuryFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Mercury" rotation={[-1.83, 0, 0]} scale={0.1}>
                  <mesh
                    name="Mercury_01_-_Default_0"
                    geometry={nodes['Mercury_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/mercury.glb');

export const Mercury3dModel = () => {
  return (
    <>
      <Canvas camera={{ fov: 75, position: [0, 10, 15] }} style={{ background: 'transeparent' }}>
        <Suspense>
          <ambientLight intensity={1.5} />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
