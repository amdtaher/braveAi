import React from 'react'
import AboutScroll from './aboutScroll'
import arrow from '../../assets/img/rightArrow.png'

const About = () => {
  return (
    <>
        {/* About Section */}
        <section className="aboutArea pt8">
            <div className="container">
                {/* About */}
                <div className="aboutSection">
                    <div className="about">
                        <div className="aboutInfo">
                            <h4 className="aboutTitle"><span>Start Fast</span> with Thousands of Templates</h4>
                            <p className="aboutSubtitle">Explore the possibilities of AI tools to save time and effort on video creation.</p>
                            <a href="#" className="aboutBtn btn">get started <img src={arrow} alt="" /></a>
                            <span className="aboutNote">Add videos or photos from computer or stock libraries.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Scroll Cards */}
            <AboutScroll/>
        </section>
    </>
    )
}

export default About