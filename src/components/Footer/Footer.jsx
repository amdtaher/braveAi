import React from 'react'
import socialIcon1 from '../../assets/img/icons/facebook.png'
import socialIcon2 from '../../assets/img/icons/instagram.png'
import socialIcon3 from '../../assets/img/icons/twitter.png'
import socialIcon4 from '../../assets/img/icons/linkedin.png'

const Footer = () => {
  return (
    <>
        {/* Footer Section */}
        <section className="footerArea pt8">
            <div className="container">
                {/* Footer */}
                <div className="footer">
                  <h4 className="footerTitle">brave ai</h4>
                  <p className="footerContact">contact us</p>
                  <div className="footerSocials">
                    <img src={socialIcon1} alt="" />
                    <img src={socialIcon2} alt="" />
                    <img src={socialIcon3} alt="" />
                    <img src={socialIcon4} alt="" />
                  </div>
                  <div className="footerLinks">
                    <a href="#">terms & conditions</a>
                    <a href="#">rules & regulations</a>
                  </div>
                  <span className="footerCopyright">this website is under @braveai copyright</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer