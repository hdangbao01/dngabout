import { useLocation  } from "react-router-dom"

import './Header.css'

function Header() {
    const location = useLocation();

    const listNav = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Project',
            link: '/project',
        },
        {
            title: 'Space',
            link: '/space',
        },
    ]

    return (
        <div className='header-wrapper'>
            <div className='header-navbar'>
                <ul className="nav-list">
                {listNav.map((item, index) => <li className={`nav-item ${location.pathname === item.link && 'active'}`} key={index}>
                    {/* <Link className={`nav-item ${location.pathname === item.link && 'active'}`} to={`${item.link}`}> */}
                        {item.title}
                    {/* </Link> */}
                </li>)}
                </ul>
            </div>            
            <div className='header-logo'>
                <img className='icon-logo' src='/icons/logo.svg' />
            </div>
            <div className='header-social'>
                <img className='social-logo' src='/icons/facebook.svg' />
                <img className='social-logo' src='/icons/github.svg' />
                <img className='social-logo' src='/icons/linkedin.svg' />
            </div>
        </div>
    )
}
  
export default Header
   