import React, { Suspense, useEffect, useRef, useState } from 'react'
import { PerspectiveCamera, Html, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import './ThreeElement.scss'

export const Model = () => {
  const gltf = useGLTF('/desk_low-poly/scene.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />
}

function ThreeModel(props) {
  const [active, setActive] = useState(false)
  const ref = useRef()
  let animSpeed = 0.025

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true)
    }, 600)
    return () => {
      clearTimeout(timer)
      setActive(false)
    }
  }, [])

  useFrame((state) => {
    if (ref.current.rotation.y > -1.6 && active) {
      ref.current.rotation.y -= animSpeed
      if (animSpeed > 0) {
        animSpeed -= 0.00008
      }
    }
  })
  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 1.6, 0]}>
      <Model />
    </mesh>
  )
}

function ThreeElement(props) {
  const [clicked, setClicked] = useState(false)
  const ref = useRef()
  const iconRef = useRef()

  const screenClickHandler = () => {
    if (!clicked) {
      if (ref.current.style.display === 'none') {
        setClicked(true)
        ref.current.style.display = 'block'
        iconRef.current.style.display = 'none'
        setTimeout(() => {
          ref.current.style.display = 'none'
          iconRef.current.style.display = 'block'
          setClicked(false)
        }, 5000)
      } else {
        ref.current.style.display = 'none'
        iconRef.current.style.display = 'block'
      }
    }
  }

  return (
    <div className='Three-Container'>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight intensity={0.5} position={[800, 1000, 3000]} />
        <directionalLight intensity={0.7} position={[0, 1000, 0]} />
        <PerspectiveCamera
          makeDefault
          lookAt={(0, 0, 0)}
          position={[0, 420, 1000]}
          rotation={[-0.3, 0, 0]}
          fov='25'
        />
        <Suspense fallback={null}>
          <Html position={[-98, 338, 0]}>
            <div className='Moving-Icon-Container' onClick={screenClickHandler}>
              <div className='Moving-Icon' ref={iconRef}>
                [ JS ]
              </div>
              <div className='Smiley-Screen' ref={ref}></div>
            </div>
          </Html>
          <ThreeModel />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeElement
