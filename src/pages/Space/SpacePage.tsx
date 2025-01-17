import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';

import './Space.css'

function Walle () {
  const walle = useGLTF('/models/walle_2.glb')

  return (
    <mesh>
      <primitive s object={walle.scene} position={[0, -2, 0]} />
    </mesh>
  )
}

function Space() {
    return (
        <div className='space-content'>
          <Canvas frameloop="demand" camera={{ position: [-2, 2, 10], fov: 45, near: 0.1, far: 200 }}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <OrbitControls />
            <Walle/>
          </Canvas>
        </div>
    )
}
  
export default Space
  