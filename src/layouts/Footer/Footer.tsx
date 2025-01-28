import './Footer.css'

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className="footer-top">
                <div className="footer-title">
                    <p>Bao Dng</p>
                    <div className='footer-desc'>As a person who enjoys exploring and self-studying. I also have experience in building websites.</div>
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
                        About
                    </div>
                    <div className="footer-project-list">
                        <div className="footer-project-item">
                            Showcase
                        </div>
                        <div className="footer-project-item">
                            Connect
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
                            <a href='https://vku.netlify.app/' target="_blank">
                                VKU simulate
                            </a>
                        </div>
                        <div className="footer-project-item">
                            <a href='https://tasksilver.netlify.app/' target="_blank">
                                tasksilver
                            </a>
                        </div>
                        <div className="footer-project-item">
                            <a href='https://hdangbao01.github.io/glimpse-sn/index.html' target="_blank">
                                glimpse
                            </a>
                        </div>
                        <div className="footer-project-item">
                            <a href='https://mock-project.netlify.app/' target="_blank">
                                Mock Project
                            </a>
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
  