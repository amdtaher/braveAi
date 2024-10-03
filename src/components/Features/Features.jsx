import React from 'react'
import FeatureScroll from './FeatureScroll'

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="featuresArea pt8">
        {/* Features */}
        <h4 className="featureTitle">Experience the power of <br /> Brave Art</h4>
        {/* Freature card scroll */}
        <FeatureScroll/>
      </section>
    </>
  )
}

export default Features