import './Tech.css'

function Tech() {
    return (
        <div className='skill-wrapper'>
            <div className='skill-list'>
                <div className="skill-item">
                    <div className="skill-top">
                        <div className="contact-btn">
                        <img className='contact-logo' src='/icons/icon-dev.svg' />
                        </div>
                        <div className="footer-project-title skill-title">VKU</div>
                    </div>
                    <div className="skill-time">2019 - 2024</div>
                    <div className="contact-desc skill-desc">University</div>
                </div>
                <div className="skill-item">
                    <div className="skill-top">
                        <div className="contact-btn">
                            <img className='contact-logo' src='/icons/icon-refact.svg' />
                        </div>
                        <div className="footer-project-title skill-title">Work</div>
                    </div>
                    <div className="skill-time">2024 - 2025</div>
                    <div className="contact-desc skill-desc">Frontend Developer</div>
                </div>
                <div className="skill-item">
                    <div className="skill-top">
                        <div className="contact-btn">
                            <img className='contact-logo' src='/icons/icon-option.svg' />
                        </div>
                        <div className="footer-project-title skill-title">Pending...</div>
                    </div>
                    <div className="skill-time">Now</div>
                    <div className="contact-desc skill-desc">Pending...</div>
                </div>
            </div>
        </div>
    )
}
  
export default Tech
  