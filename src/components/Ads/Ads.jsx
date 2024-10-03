import React from 'react'
import AdsScroll from './AdsScroll'
import adsBg from '../../assets/img/icons/adsBg.png'

const Ads = () => {
  return (
    <>
        {/* Ads Section */}
        <section className="adsArea pt8">
            <div className="container">
                {/* Ads */}
                <div className="ads">
                  <h4 className="adsTitle">Brave can write all kinds of things for you</h4>
                  <p className="adsSubtitle">High-performing copy from top brands has been used to train our AI. Content written by it converts well and resonates with your audience.</p>
                  <button className="adsBtn btn">see all ads</button>
                </div>
            </div>
            {/* Ads Card Scroll */}
            <AdsScroll/>
            <img className="adsBg" src={adsBg} alt="" />
            <img className="adsBg" src={adsBg} alt="" />
        </section>
    </>
  )
}

export default Ads