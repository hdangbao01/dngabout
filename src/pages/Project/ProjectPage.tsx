import { useState } from 'react'

import { IProject } from '@/types/project'

import './Project.css'
import Navbar from '@/components/Navbar/Navbar'

function ProjectPage() {
    const listProject: IProject[] = [
        {
            name: 'VKU simulate',
            desc: 'a 3D website that simulates VKU, offering an interactive and immersive experience of school and classroom spaces. Users can explore the campus, join online classes and realtime, creating a refreshing and engaging learning environment.',
            img: '/src/assets/images/3d.jpg',
            icon: '/src/assets/images/three-js.png',
            tech: ['ReactJS', 'ThreeJS', 'Firebase', 'Blender']
        },
        {
            name: 'tasksilver',
            desc: 'a modern platform that connects users with suitable domestic helpers in their area. Users can register to become helpers and manage their work directly on the platform. The system supports realtime chat, enabling seamless communication between employers and helpers.',
            img: '/src/assets/images/ta.jpg',
            icon: '/src/assets/images/tasksilver.png',
            tech: ['ReactJS', 'Firebase']
        },
        {
            name: 'glimpse',
            desc: 'is a visual and creative platform where users can explore, save, and share unique image collections. The website allows users to effortlessly create personalized boards based on their favorite themes.',
            img: '/src/assets/images/pi.jpg',
            icon: '/src/assets/images/shortcut.png',
            tech: ['HTML', 'CSS', 'Javascript']
        },
    ]
    
    const [projectDetail, setProjectDetail] = useState(listProject[0])

    return (
        <div className='project-container'>
            <div className="project-wrapper">
                {listProject.map((item, index) => <div className={`project-list ${projectDetail.name === item.name && 'project-active'}`} key={index}>
                    <div className="project-title">
                        <img className='project-img' src={item.icon} />
                        <div className='project-name'>{item.name}</div>
                        <div className='project-desc'>{item.desc}</div>
                        <div className="project-tech">
                            {item.tech.map((tech, index) => <div key={index} className='project-tech-item'>{tech}</div>)}
                        </div>
                        <div className='project-link port-button'>
                            View Project
                        </div>
                    </div>
                    <div className="project-main">
                        <img src={item.img} />
                    </div>
                </div>)}
                <Navbar listProject={listProject} setProjectDetail={setProjectDetail} />
            </div>
        </div>
    )
}
  
export default ProjectPage