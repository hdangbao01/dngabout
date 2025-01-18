import './Footer.css'

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className="footer-top">
                <div className="footer-title">
                    <p>Bao Dng</p>
                    <div className='footer-desc'>Dng description</div>
                    <div className="footer-contact">
                        <div className="footer-btn">
                            <img className='footer-logo' src='/icons/btn-github.svg' />
                        </div>
                        <div className="footer-btn">
                            <img className='footer-logo' src='/icons/btn-linkedin.svg' />
                        </div>
                        <div className="footer-btn">
                            <img className='footer-logo' src='/icons/btn-facebook.svg' />
                        </div>
                    </div>
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
                            VKU simulate
                        </div>
                        <div className="footer-project-item">
                            tasksilver
                        </div>
                        <div className="footer-project-item">
                            glimpse
                        </div>
                        <div className="footer-project-item">
                            Mock Project
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    ©2025 baodng
                </div>
                <div className="footer-view">
                    pending...
                </div>
            </div>
        </div>
    )
}
  
export default Footer
  