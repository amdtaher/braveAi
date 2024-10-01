import React from "react";
import ScrollCard from "../ScrollCard/ScrollCard";
import aboutImg1 from '../../assets/img/aboutImages/aboutImg1.png'
import aboutImg2 from '../../assets/img/aboutImages/aboutImg2.png'
import aboutImg3 from '../../assets/img/aboutImages/aboutImg3.png'
import aboutImg4 from '../../assets/img/aboutImages/aboutImg4.png'
import aboutImg5 from '../../assets/img/aboutImages/aboutImg5.png'
import aboutImg6 from '../../assets/img/aboutImages/aboutImg6.png'
import aboutImg7 from '../../assets/img/aboutImages/aboutImg7.png'
import aboutImg8 from '../../assets/img/aboutImages/aboutImg8.png'
import aboutImg9 from '../../assets/img/aboutImages/aboutImg9.png'
import aboutImg10 from '../../assets/img/aboutImages/aboutImg10.png'

const aboutScroll = () => {
  return (
    <>
      {/* About Scroll Cards */}
        <div className="scrollContainer">
            <div className="scrollWrapper">
                <div className="scrollCards scroll1">
                    <ScrollCard
                    title='community'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg1}
                    />
                    <ScrollCard
                    title='marketing'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg2}
                    />
                    <ScrollCard
                    title='success'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg3}
                    />
                    <ScrollCard
                    title='wedding'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg4}
                    />
                    <ScrollCard
                    title='business'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg5}
                    />
                    <ScrollCard
                    title='emunity'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg3}
                    />
                </div>
                <div className="scrollCards scroll1">
                    <ScrollCard
                    title='community'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg1}
                    />
                    <ScrollCard
                    title='marketing'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg2}
                    />
                    <ScrollCard
                    title='success'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg3}
                    />
                    <ScrollCard
                    title='wedding'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg4}
                    />
                    <ScrollCard
                    title='business'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg5}
                    />
                    <ScrollCard
                    title='emunity'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg3}
                    />
                </div>
            </div>
            <div className="scrollWrapper">
                <div className="scrollCards scroll2">
                    <ScrollCard
                    title='slideshow'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg6}
                    />
                    <ScrollCard
                    title='store'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg7}
                    />
                    <ScrollCard
                    title='recommended'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg8}
                    />
                    <ScrollCard
                    title='extras'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg9}
                    />
                    <ScrollCard
                    title='ending'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg10}
                    />
                    <ScrollCard
                    title='expresso'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg8}
                    />
                </div>
                <div className="scrollCards scroll2">
                    <ScrollCard
                    title='slideshow'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg6}
                    />
                    <ScrollCard
                    title='store'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg7}
                    />
                    <ScrollCard
                    title='recommended'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg8}
                    />
                    <ScrollCard
                    title='extras'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg9}
                    />
                    <ScrollCard
                    title='ending'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg10}
                    />
                    <ScrollCard
                    title='expresso'
                    buttons={true}
                    btn1='customize'
                    btn2='preview'
                    cardImage={aboutImg8}
                    />
                </div>
            </div>
        </div>
    </>
  );
};

export default aboutScroll;
