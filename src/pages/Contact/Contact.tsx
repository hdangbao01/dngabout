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
                        <div className="contact-desc">+84 335-452-018</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-top">
                            <div className="contact-btn">
                                <img className='contact-logo' src='/icons/icon-email.svg' />
                            </div>
                            <div className="footer-project-title">Email</div>
                        </div>
                        <div className="contact-desc">hdangbao01@gmail.com</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-top">
                            <div className="contact-btn">
                                <img className='contact-logo' src='/icons/icon-address.svg' />
                            </div>
                            <div className="footer-project-title">Address</div>
                        </div>
                        <div className="contact-desc">Da Nang, Viet Nam</div>
                    </div>
                </div>

                <div className="contact-highlight">
                    <div className='contact-title'>
                        <div className="input-field">
                            <div className="input-label">
                                Send message
                            </div>
                            <input className='input' placeholder='Name...' />
                        </div>
                        <div className="input-field">
                            <textarea rows={4} className='textarea' placeholder='Message...' />
                        </div>
                        <div className="contact-button">Send</div>
                    </div>  
                    <div className="contact-me">
                        <img className='contact-img' src='/images/dng2.jpg' />
                    </div>                  
                </div>
            </div>
        </div>
    )
}
  
export default Contact
  