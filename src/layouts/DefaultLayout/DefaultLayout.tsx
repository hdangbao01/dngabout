import './DefaultLayout.css'

import Header from "@/layouts/Header/Header"
import HomePage from "@/pages/Home/HomePage"
import ProjectPage from "@/pages/Project/ProjectPage"
import Contact from "@/pages/Contact/Contact"
import Tech from "@/pages/Tech/Tech"
import Footer from "@/layouts/Footer/Footer"
// import SpacePage from "@/pages/Space/SpacePage"

function DefaultLayout() {
    return (
        <div className='default-layout'>
            <Header />
            <HomePage />
            <Tech />            
            <ProjectPage />
            {/* <SpacePage /> */}
            <Contact />
            <Footer />
        </div>
    )
}
  
export default DefaultLayout
  