import './DefaultLayout.css'

import Header from "../Header/Header"
// import HomePage from "@/pages/Home/HomePage"
import HomePage from "../../pages/Home/HomePage"
import ProjectPage from "../../pages/Project/ProjectPage"
import Contact from "../../pages/Contact/Contact"
import Tech from "../../pages/Tech/Tech"
import Footer from "../Footer/Footer"

function DefaultLayout() {

    return (
        <div className='default-layout'>
            <Header />
            <HomePage />
            <Tech />            
            <ProjectPage />
            <Contact />
            <Footer />
        </div>
    )
}
  
export default DefaultLayout
  