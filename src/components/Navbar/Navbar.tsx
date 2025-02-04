import { useRef, useEffect } from 'react'

import { IProject } from '../../types/project'

import './Navbar.css'

interface NavbarProps {
    listProject: IProject[],
    setProjectDetail: React.Dispatch<React.SetStateAction<IProject>>
}

const Navbar = ({listProject, setProjectDetail}: NavbarProps) => {
    const navSlide = useRef<HTMLDivElement>(null);
    const navList: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const showProjectDetail = (e: React.MouseEvent<HTMLDivElement>, item: IProject) => {
        const element = e.target as HTMLDivElement;
        setProjectDetail(item);
        if (navSlide.current) {
            navSlide.current.style.left = `${element.offsetLeft}px`;
            navSlide.current.style.width = `${element.offsetWidth}px`;
        }
    }


    useEffect(() => {
        if (!navList.current) return;

        const firstItem = navList.current.children[0] as HTMLElement;
        if (navSlide.current) {
            navSlide.current.style.left = `${firstItem.offsetLeft}px`;
            navSlide.current.style.width = `${firstItem.offsetWidth}px`;
        }
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