import { useRef, useEffect } from 'react'

import { IProject } from '@/types/project'

import './Navbar.css'

interface NavbarProps {
    listProject: IProject[],
    setProjectDetail: React.Dispatch<any>
}

const Navbar = ({listProject, setProjectDetail}: NavbarProps) => {
    const navSlide: React.MutableRefObject<null> = useRef(null);
    const navList: React.MutableRefObject<null> = useRef(null);

    const showProjectDetail = (e: any, item: IProject) => {
        const element = e.target;
        setProjectDetail(item);
        navSlide.current.style.left = `${element.offsetLeft}px`;
        navSlide.current.style.width = `${element.offsetWidth}px`;
    }


    useEffect(() => {
        if (!navList.current) return;

        const firstItem = navList.current.children[0];
        navSlide.current.style.left = `${firstItem.offsetLeft}px`;
        navSlide.current.style.width = `${firstItem.offsetWidth}px`;
    }, [navList])

    return (
        <div className='project-nav-list' ref={navList}>
            {listProject.map((item, index) => (
                <div 
                    className={`project-nav-item`} 
                    key={index} 
                    onClick={(e) => showProjectDetail(e, item)}
                >
                    { item.name }
                </div>
            ))}
            <div className='nav-slide' ref={navSlide}></div>
        </div>
    );
}

export default Navbar