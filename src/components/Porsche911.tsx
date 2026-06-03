'use client'

import * as THREE from 'three'
import React, { useEffect, useMemo } from 'react'
import { useGLTF, Center } from '@react-three/drei'
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
  // Load the new high-fidelity Porsche 911 model
  const { scene, materials } = useGLTF('/models/porsche_911.glb') as unknown as GLTFResult

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

  // Elevate materials dynamically for a luxury metallic vintage look
  useMemo(() => {
    if (!materials) return

    // 1. Main body paint (Miami Blue / Gentian Blue styling)
    const paint = materials.Blue_Car_Paint || materials['1_car_paint.002'] || materials['1_car_paint.007']
    if (paint) {
      // By default keep the GLB's original high-fidelity blue paint, but enhance specular clearcoat
      paint.metalness = 0.95
      paint.roughness = 0.05
      
      if ('clearcoat' in paint) {
        // @ts-ignore
        paint.clearcoat = 1.0
        // @ts-ignore
        paint.clearcoatRoughness = 0.01
      }
    }

    // 2. High reflective premium window tints
    const glass = materials.Glass || materials.Car_windshield_glass || materials['Car_windshield_glass.001']
    if (glass) {
      glass.color.set('#080808')
      glass.transparent = true
      glass.opacity = 0.5
      glass.roughness = 0.01
      glass.metalness = 0.3
      if ('clearcoat' in glass) {
        // @ts-ignore
        glass.clearcoat = 1.0
      }
    }

    // 3. Polished Chrome / Rims styling
    const chrome = materials.Chrome || materials.Rims || materials['Rims.001'] || materials['chrome.002']
    if (chrome) {
      chrome.color.set('#e2e2e2')
      chrome.roughness = 0.08
      chrome.metalness = 0.95
    }

    // 4. Matte base plastic / trim blackout
    const blackout = materials.Black_Plastic || materials.Plastic_Base_02 || materials['Black_Plastic.001']
    if (blackout) {
      blackout.color.set('#0f0f0f')
      blackout.roughness = 0.65
      blackout.metalness = 0.1
    }
  }, [materials])

  return (
    <Center bottom>
      <primitive object={scene} />
    </Center>
  )
}

useGLTF.preload('/models/porsche_911.glb')
