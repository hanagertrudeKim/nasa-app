import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/moon.glb')
  const moonRef = useRef();
  
  useFrame(()=>{
    moonRef.current.rotation.y -= -0.001
  })

  return (
    <group {...props} dispose={null} ref={moonRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/moon.glb')

export const Moon3dModel = () => {
  return (
    <>
    <Canvas camera={{fov: 80, position: [0, 10, 15]}} style={{background: "transeparent"}}>
      <Suspense>
        <ambientLight intensity={0.5} />
        <Model />
      </Suspense>
    </Canvas>
  </>
  )
}
