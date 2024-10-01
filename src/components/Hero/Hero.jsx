import React from 'react'
import heroImg from '../../assets/img/heroImages/heroImg.jpg'
import star from '../../assets/img/heroImages/starImg1.png'
import star1 from '../../assets/img/heroImages/starImg2.png'
import star2 from '../../assets/img/heroImages/starImg3.png'
import miniProfile1 from '../../assets/img/heroImages/miniProfile1.png'
import miniProfile2 from '../../assets/img/heroImages/miniProfile2.png'
import miniProfile3 from '../../assets/img/heroImages/miniProfile3.png'
import arrow from '../../assets/img/rightArrow.png'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="heroArea pt8">
        <div className="container">
          {/* Hero */}
          <div className="hero">
            {/* heroTop */}
            <div className="heroTop">
              <h2 className="heroTopTitle">create and <span>publish</span> high-quality videos</h2>
              <p className="heroTopSubtitle">Create and edit videos easily for marketing, social media, family,<br /> and any other purpose.</p>
              <a href="#" className="heroTopButton btn">create now  <img src={arrow} alt="" /></a>
              <div className="heroStyles">
                <img className='star1' src={star} alt="" />
                <img className='star2' src={star1} alt="" />
                <img className='star3' src={star2} alt="" />
                <img className='miniProfile1' src={miniProfile1} alt="" />
                <img className='miniProfile2' src={miniProfile2} alt="" />
                <img className='miniProfile3' src={miniProfile3} alt="" />
              </div>
            </div>
            {/* heroBottom */}
            <div className="heroBottom">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero