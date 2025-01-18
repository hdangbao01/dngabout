import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { AnimationMixer } from 'three';

import './Home.css'

function Walle () {
    const chaRef = useRef()
    
    const walle = useGLTF('/models/robot.glb')
    // const walle = useGLTF('/models/phihanhgia.gltf')
    // const walle = useGLTF('/models/walle_2.glb')

    const gltfAnimations = walle.animations
    const mixer = new AnimationMixer(walle.scene)

    console.log('mixer', mixer);
    console.log('gltfAnimations', gltfAnimations);

    const { actions } = useAnimations(gltfAnimations, chaRef)

    useFrame(() => {
        actions.Idle.play()

        chaRef.current.rotation.y -= 0.002;
    });

    // useEffect(() => {
    //     actions.Idle.play()
    //     chaRef.current.rotation.y -= 0.002;
    // }, [actions])

    return (
        <mesh ref={chaRef}>
            <primitive s object={walle.scene} position={[0, -2, 0]} />
        </mesh>
    )
}

function HomePage() {
    return (
        <div className='home-container'>
            <div className="home-wrapper">
                <div className='home-model'>
                    <div className='template-model'>
                        <Canvas frameloop="demand" camera={{ position: [-2, 2, 10], fov: 45, near: 0.1, far: 200 }}>
                            <ambientLight intensity={Math.PI / 2} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                            <OrbitControls />
                            <Walle/>
                        </Canvas>
                    </div>
                    <img className='spot-model spot-1' src='/icons/draw.svg' />
                    <img className='spot-model spot-2' src='/icons/about2.svg' />
                    <div className='spot-model arrow-model spot-3'>
                        <div>drag me</div>
                        <img src='/icons/draw-arrow.svg' />
                    </div>
                    <img className='spot-model info-model spot-4' src='/icons/about.svg' />
                </div>
                <div className="left-home">
                    <div className="left-top">
                        Hi,
                    </div>
                    <div className="left-title">
                        I'm Bao
                    </div>
                    <div className="left-desc">
                        Dng description
                    </div>
                    <div className='tech-wrapper'>
                        <div className='tech-list'>
                            <img className='tech-logo' src='/icons/icon-react.svg' />
                            <img className='tech-logo' src='/icons/icon-vue.svg' />
                            <img className='tech-logo' src='/icons/icon-threejs.svg' />
                            <img className='tech-logo' src='/icons/icon-tailwind.svg' />
                            <img className='tech-logo' src='/icons/icon-sass.svg' />
                            <div className='tech-line'></div>
                            <img className='tech-logo' src='/icons/icon-git.svg' />
                            <img className='tech-logo postman' src='/icons/icon-postman.svg' />
                            <img className='tech-logo' src='/icons/icon-blender.svg' />
                        </div>
                    </div>
                    <div className="port-button">
                        Contact
                    </div>
                </div>
                {/* <div className="right-home">
                    <div className="right-title">
                        <div className="list-nav">
                            <div className="list-item item-active">Info</div>
                            <div className="list-item">Character</div>
                            <div className="list-item">Space</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
  
export default HomePage
  