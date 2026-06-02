'use client'

import * as THREE from 'three'
import React, { forwardRef, useImperativeHandle, useRef, useMemo, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    FordMustang_MTL?: THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial
    FordMustangWindow_MTL?: THREE.MeshPhysicalMaterial
    FordMustangWheels_MTL?: THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial
    Blackout_MTL?: THREE.MeshStandardMaterial
  }
}

export interface MustangProps extends React.ComponentPropsWithoutRef<'group'> {
  onLoad?: () => void
  color?: 'black' | 'white' | 'red' | 'original'
}

export interface MustangRef {
  car: THREE.Group | null
  hood: THREE.Group | null
  spinningGroup: THREE.Group | null
  platform: THREE.Group | null
}

const Mustang = forwardRef<MustangRef, MustangProps>(({ onLoad, color = 'original', ...props }, ref) => {
  // Load the new high-fidelity 1967 Mustang model
  const { scene, materials } = useGLTF('/models/1967_ford_mustang_fastback_-_4096px2.glb') as unknown as GLTFResult

  const carRef = useRef<THREE.Group>(null)
  const dummyHoodRef = useRef<THREE.Group>(null)
  const spinningGroupRef = useRef<THREE.Group>(null)
  const platformRef = useRef<THREE.Group>(null)

  // Trigger onLoad callback when the model mounts
  useEffect(() => {
    if (onLoad) {
      onLoad()
    }
  }, [onLoad])

  // Configure high-fidelity shadow casting and reflection intensity on all loaded children
  useEffect(() => {
    if (!scene) return
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.envMapIntensity = 1.6 // Boost studio environment reflections
        }
      }
    })
  }, [scene])

  // Expose refs for GSAP to control.
  // Since the 1967 model is a single continuous high-fidelity shell, it does not have a separated
  // hood mesh. We return a dummyHoodRef to prevent GSAP and loading pollers from crashing,
  // allowing the scroll-timeline to run perfectly and adapt cleanly!
  useImperativeHandle(ref, () => ({
    get car() {
      return carRef.current
    },
    get hood() {
      return dummyHoodRef.current
    },
    get spinningGroup() {
      return spinningGroupRef.current
    },
    get platform() {
      return platformRef.current
    }
  }))

  // Elevate materials dynamically for a luxury metallic vintage look
  useMemo(() => {
    if (!materials) return

    // 1. Main body paint (FordMustang_MTL)
    const extPaint = materials.FordMustang_MTL
    if (extPaint) {
      if (color === 'white') {
        extPaint.color.set('#f4f3ef') // High-gloss cream Wimbledon White
        extPaint.metalness = 0.2
        extPaint.roughness = 0.12
      } else if (color === 'red') {
        extPaint.color.set('#a31d1d') // Classic deep crimson Boss Red
        extPaint.metalness = 0.9
        extPaint.roughness = 0.08
      } else if (color === 'black') {
        extPaint.color.set('#0a0a0c') // Glossy Jet Midnight Black
        extPaint.metalness = 0.98
        extPaint.roughness = 0.08
      } else {
        // 'original' / default - preserves the GLB's original high-fidelity black paint, white stripes, and trim textures!
        extPaint.color.set('#ffffff')
        extPaint.metalness = 0.92
        extPaint.roughness = 0.06
      }

      if ('clearcoat' in extPaint) {
        // @ts-ignore
        extPaint.clearcoat = 1.0
        // @ts-ignore
        extPaint.clearcoatRoughness = 0.015
      }
    }

    // 2. High reflective premium window tints (FordMustangWindow_MTL)
    const glass = materials.FordMustangWindow_MTL
    if (glass) {
      glass.color.set('#080808')
      glass.transparent = true
      glass.opacity = 0.65
      glass.roughness = 0.01
      glass.metalness = 0.3
      if ('clearcoat' in glass) {
        // @ts-ignore
        glass.clearcoat = 1.0
      }
    }

    // 3. Vintage Polished Chrome Wheels (FordMustangWheels_MTL)
    const wheels = materials.FordMustangWheels_MTL
    if (wheels) {
      wheels.color.set('#e2e2e2') // Chrome spokes
      wheels.roughness = 0.08
      wheels.metalness = 0.95
    }

    // 4. Matte Chassis & Undercarriage blackout (Blackout_MTL)
    const blackout = materials.Blackout_MTL
    if (blackout) {
      blackout.color.set('#0f0f0f')
      blackout.roughness = 0.65
      blackout.metalness = 0.1
    }
  }, [materials, color])

  return (
    <group {...props} ref={carRef} dispose={null}>
      <group ref={spinningGroupRef}>
        <primitive object={scene} />
        
        {/* Elegant circular turntable stage under the car wheels */}
        <group ref={platformRef}>
          {/* Main brushed metal disc */}
          <mesh position={[0, -0.15, 0]} receiveShadow>
            <cylinderGeometry args={[2.3, 2.3, 0.08, 64]} />
            <meshPhysicalMaterial 
              color="#121214" 
              roughness={0.12} 
              metalness={0.9} 
              clearcoat={1.0}
              clearcoatRoughness={0.1}
            />
          </mesh>
          
          {/* Massive architectural pedestal base extending deep down to act as the footer stage */}
          <mesh position={[0, -1.15, 0]} receiveShadow>
            <cylinderGeometry args={[2.28, 2.28, 2.0, 64]} />
            <meshPhysicalMaterial 
              color="#0a0a0c" 
              roughness={0.25} 
              metalness={0.8} 
              clearcoat={0.3}
            />
          </mesh>
          

          
          {/* Outer high-gloss dark chrome bezel border */}
          <mesh position={[0, -0.155, 0]}>
            <cylinderGeometry args={[2.33, 2.33, 0.07, 64]} />
            <meshPhysicalMaterial 
              color="#1a1a1e" 
              roughness={0.08} 
              metalness={0.95} 
              clearcoat={1.0}
            />
          </mesh>
        </group>
      </group>
      
      {/* Dummy hood ref to capture GSAP rotations safely without crashing */}
      <group ref={dummyHoodRef} />
    </group>
  )
})

Mustang.displayName = 'Mustang'

export default Mustang

useGLTF.preload('/models/1967_ford_mustang_fastback_-_4096px2.glb')
