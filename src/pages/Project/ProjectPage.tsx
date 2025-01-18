import { useState } from 'react'

import { IProject } from '@/types/project'

import './Project.css'
import Navbar from '@/components/Navbar/Navbar'

function ProjectPage() {
    const listProject: IProject[] = [
        {
            name: 'VKU simulate',
            desc: 'VKU simulate desc',
            img: '/src/assets/images/3d.jpg',
            icon: '/src/assets/images/three-js.png'
        },
        {
            name: 'tasksilver',
            desc: 'tasksilver desc',
            img: '/src/assets/images/ta.jpg',
            icon: '/src/assets/images/tasksilver.png'
        },
        {
            name: 'glimpse',
            desc: 'glimpse desc',
            img: '/src/assets/images/pi.jpg',
            icon: '/src/assets/images/shortcut.png'
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