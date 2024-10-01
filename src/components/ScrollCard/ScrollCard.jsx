import React from 'react'

const ScrollCard = ({image, title, subTitle, buttons, btn1, btn2, cardImage}) => {
  return (
    <>
      {/* Scroll Card Section */}
      <div className="scrollSingleCard">
        {/* Card Info */}
        <div className="cardInfo">
          {/* Title & Image */}
          <div className="cardTitleSection">
              {image && <img src={image} alt="" />}
              <h4 className="cardTitle">{title}</h4>
          </div>
          {/* Subtitle */}
          {subTitle && <p className="cardSubtitle"></p>}
          {/* Buttons */}
          {buttons && 
          <div className="cardButtons">
              {btn1 && <button className='cardBtn1'>{btn1}</button>}
              {btn2 && <button className='cardBtn2'>{btn2}</button>}
          </div>}
        </div>
        {/* Card Image */}
        <div className="cardImage">
          {cardImage && <img src={cardImage} alt="" />}
        </div>
      </div>
    </>
  )
}

export default ScrollCard