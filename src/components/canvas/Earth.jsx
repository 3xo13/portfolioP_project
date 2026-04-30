"use client";

import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import { PCFShadowMap } from 'three';


const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.45} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return(
    <Canvas 
      shadows={{ type: PCFShadowMap }}
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4.6, 3.2, 5.4]
      
      }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          mainPolarAngle={Math.PI / 2}
        />
          <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas