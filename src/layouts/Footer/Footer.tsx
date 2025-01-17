import './Footer.css'

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className="footer-top">
                <div className="footer-title">
                    <p>Wall-e</p>
                </div>
                <div className="footer-project">
                    <div className="footer-project-title">
                        Page
                    </div>
                    <div className="footer-project-list">
                        <div className="footer-project-item">
                            Home
                        </div>
                        <div className="footer-project-item">
                            Project
                        </div>
                        <div className="footer-project-item">
                            Space
                        </div>
                    </div>
                </div>
                <div className="footer-project">
                    <div className="footer-project-title">
                        Project
                    </div>
                    <div className="footer-project-list">
                        <div className="footer-project-item">
                            VKU Simulate
                        </div>
                        <div className="footer-project-item">
                            tasksilver
                        </div>
                        <div className="footer-project-item">
                            glimpse
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="footer-btn">
                        <img className='footer-logo' src='/icons/btn-facebook.svg' />
                    </div>
                    <div className="footer-btn">
                        <img className='footer-logo' src='/icons/btn-github.svg' />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    ©2025 walle
                </div>
                <div className="footer-view">
                    pending...
                </div>
            </div>
        </div>
    )
}
  
export default Footer
  