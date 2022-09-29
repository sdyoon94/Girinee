/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function A(props) {
  const { nodes, materials } = useGLTF('/A.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material}/>
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material}/>
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material}/>
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material}/>
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material}>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={0.7} color="lightblue" roughness={1} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material}>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={0.7} color="lightblue" roughness={1} metalness={0.3} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/A.glb')
