'use client'

import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, PerspectiveCamera, Environment } from '@react-three/drei'
import * as THREE from 'three'
import Mustang, { MustangRef } from './Mustang'

// Camera Rig for premium mouse parallax effect
function CameraRig() {
  useFrame((state) => {
    // Smoothly lerp camera position based on pointer coordinates
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.8, 0.05)
    // Low eye-level ground studio shot
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.4 + state.pointer.y * 0.25, 0.05)
    state.camera.lookAt(0, 0.35, 0)
  })
  return null
}

interface ShowroomCanvasProps {
  mustangRef: React.RefObject<MustangRef | null>
}

export default function ShowroomCanvas({ mustangRef }: ShowroomCanvasProps) {
  return (
    <div className="canvas-viewport">
      <Canvas 
        shadows 
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        {/* Ambient Studio Lighting (Slightly boosted for high-contrast details) */}
        <ambientLight intensity={0.75} />
        
        {/* Studio Key Light (Throws gorgeous realistic drop shadows) */}
        <directionalLight 
          position={[8, 12, 8]} 
          intensity={3.2} 
          castShadow 
          shadow-bias={-0.00005} 
          shadow-mapSize={[2048, 2048]} // Ultra-crisp shadows
        />
        
        {/* Warm Studio Soft Bounce (Adds smooth retro depth) */}
        <directionalLight position={[-8, 6, -8]} intensity={1.8} color="#fffaf0" />
        
        {/* Front & Rear Underbody Fill Lights to define bumpers and chrome details */}
        <pointLight position={[0, -1, 3]} intensity={1.2} color="#ffffff" />
        <pointLight position={[0, 1, -4]} intensity={1.0} color="#ffffff" />
        
        <PerspectiveCamera makeDefault position={[0, 0.4, 5.0]} fov={35} />

        {/* Studio Environment Map reflections for dynamic physical chrome/paint - 100% offline, served locally from public/potsdamer_platz_1k.hdr */}
        <Environment files="/potsdamer_platz_1k.hdr" />

        <Suspense fallback={null}>
          {/* The Mustang car component set to 'original' to preserve default black paint, white stripes, and chrome details */}
          <Mustang ref={mustangRef} color="original" />
          
          {/* Floor Soft Contact Shadows - shifted up to y=-0.22 to follow the elevated car position and platform */}
          <ContactShadows 
            position={[0, -0.22, 0]} 
            opacity={0.75} 
            scale={12} 
            blur={2.5} 
            far={1.6} 
          />
          
          {/* Camera Mouse Parallax Control Rig */}
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  )
}
