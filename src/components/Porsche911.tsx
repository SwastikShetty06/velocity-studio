'use client'

import * as THREE from 'three'
import React, { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial
  }
}

export interface Porsche911Props {
  color?: string
}

export default function Porsche911({ color = 'original' }: Porsche911Props) {
  // Load the new high-fidelity 2014 Porsche 911 Turbo model
  const { scene, materials } = useGLTF('/models/2014_porsche_911_turbo_991.glb') as unknown as GLTFResult

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

  // Elevate materials dynamically for a luxury metallic look matching the theme
  useMemo(() => {
    if (!materials) return

    // 1. Main body paint (CarPaint)
    const paint = materials.CarPaint || materials.Paint_Metal || materials.Paint_Plastic
    if (paint) {
      // Miami Blue styling for Porsche
      paint.color.set('#00b0ff')
      paint.metalness = 0.95
      paint.roughness = 0.05
      
      if ('clearcoat' in paint) {
        // @ts-ignore
        paint.clearcoat = 1.0
        // @ts-ignore
        paint.clearcoatRoughness = 0.015
      }
    }

    // 2. High reflective premium window tints
    const glass = materials.windows || materials.glass_light || materials.red_glass
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

    // 3. Polished Chrome / Rims styling
    const chrome = materials.Rims || materials.rim_Color || materials.disk
    if (chrome) {
      chrome.color.set('#e2e2e2')
      chrome.roughness = 0.08
      chrome.metalness = 0.95
    }

    // 4. Matte base plastic / trim blackout
    const blackout = materials.Plas_S || materials.chassis || materials.grille_b
    if (blackout) {
      blackout.color.set('#0f0f0f')
      blackout.roughness = 0.65
      blackout.metalness = 0.1
    }
  }, [materials])

  return (
    <group 
      scale={[100, 100, 100]}
      position={[0, 0.15, 0]}
    >
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/2014_porsche_911_turbo_991.glb')
