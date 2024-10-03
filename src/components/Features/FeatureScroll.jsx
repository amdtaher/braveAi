import React from "react";
import ScrollCard from "../ScrollCard/ScrollCard";
import featureImg1 from '../../assets/img/featureImages/featureImg1.png'
import featureImg2 from '../../assets/img/featureImages/featureImg2.png'
import featureImg3 from '../../assets/img/featureImages/featureImg3.png'
import featureImg4 from '../../assets/img/featureImages/featureImg4.png'
import featureImg5 from '../../assets/img/featureImages/featureImg5.png'

const featureScroll = () => {
  return (
    <>
      {/* Features Scroll Cards */}
        <div className="scrollContainer featureScrollContainer">
            <div className="scrollWrapper">
                <div className="featureScrollCards scroll1">
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg1}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg2}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg3}
                    />
                </div>
                <div className="featureScrollCards scroll1">
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg1}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg2}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg3}
                    />
                </div>
            </div>
            <div className="scrollWrapper">
                <div className="featureScrollCards scroll2">
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg3}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg4}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg5}
                    />
                </div>
                <div className="featureScrollCards scroll2">
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg3}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg4}
                    />
                    <ScrollCard
                    title='Messy Bedroom 3d'
                    subTitle='Isometric cozy messy bedroom inspired by studio'
                    buttons={true}
                    btn2='explore this style'
                    cardImage={featureImg5}
                    />
                </div>
            </div>
        </div>
    </>
  );
};

export default featureScroll;
