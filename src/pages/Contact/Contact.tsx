import './Contact.css'

function Contact() {
    return (
        <div className='contact-wrapper'>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-top">
                            <div className="contact-btn">
                                <img className='contact-logo' src='/icons/icon-phone.svg' />
                            </div>
                            <div className="footer-project-title">Phone</div>
                        </div>
                        <div className="contact-desc">+84 123-123-1234</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-top">
                            <div className="contact-btn">
                                <img className='contact-logo' src='/icons/icon-email.svg' />
                            </div>
                            <div className="footer-project-title">Email</div>
                        </div>
                        <div className="contact-desc">dng@gmail.com</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-top">
                            <div className="contact-btn">
                                <img className='contact-logo' src='/icons/icon-address.svg' />
                            </div>
                            <div className="footer-project-title">Address</div>
                        </div>
                        <div className="contact-desc">Viet Nam</div>
                    </div>
                </div>

                <div className="contact-highlight">
                    Dng
                </div>
            </div>
        </div>
    )
}
  
export default Contact
  