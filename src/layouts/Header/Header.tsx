// import { useLocation  } from "react-router-dom"
import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
    const [isMenu, setIsMenu] = useState(false)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)

        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    // Active Backgound Menu
    useEffect(() => {
        if (offset > 1) {
            setIsMenu(true)
        } else {
            setIsMenu(false)
        }
    }, [offset]);

    // const location = useLocation();

    // const listNav = [
    //     {
    //         title: 'Home',
    //         link: '/',
    //     },
    //     {
    //         title: 'Project',
    //         link: '/project',
    //     },
    //     {
    //         title: 'Space',
    //         link: '/space',
    //     },
    // ]

    return (
        <div className={`header-container ${isMenu && 'header-active'}`}>
            <div className='header-wrapper'>
                {/* <div className='header-navbar'>
                    <ul className="nav-list">
                    {listNav.map((item, index) => <li className={`nav-item ${location.pathname === item.link && 'active'}`} key={index}>
                            {item.title}
                    </li>)}
                    </ul>
                </div> */}
                <div className='header-logo'>
                    <img className='icon-logo' src='/icons/logo.svg' />
                    <p>bao<span>dng</span></p>
                </div>
                {/* <div className='header-social'>
                    <img className='social-logo' src='/icons/github.svg' />
                    <img className='social-logo' src='/icons/linkedin.svg' />
                    <img className='social-logo' src='/icons/facebook.svg' />
                </div> */}
                <div className="btn-header">
                    Contact
                </div>
            </div>
        </div>
    )
}
  
export default Header
   