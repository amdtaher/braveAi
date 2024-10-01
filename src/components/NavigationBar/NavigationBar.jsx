import React, { useState } from 'react'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import logo from '../../assets/img/logo.png'
import hamburger from '../../assets/img/hamburger.png'

const NavigationBar = () => {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = ()=>{
    setToggle((em)=>!em);
  }
  return (
    <>
      {/* Navigation Bar Section */}
      <div className="navArea py2">
        <div className="container">
          {/* <!-- Navigation Bar --> */}
          <nav className="navBar">
            {/* <!-- Nav Left --> */}
            <div className="navLeft">
                {/* <!-- Nav logo --> */}
                <div className="navLogo">
                    <img src={logo} alt=""/>
                    <h2 className="navLogoTitle">brave</
                    h2>
                </div>
                {/* <!-- Nav Links --> */}
                <div className={`navLinks ${isToggle ? 'show' : 'hide'}`}>
                    <a href="#">template</a>
                    <a href="#">feature</a>
                    <a href="#">pricing</a>
                    <a href="#">resources</a>
                    <button className="navBtnHidden btn">start free trial</button>
                </div>
            </div>
            {/* <!-- Nav Right --> */}
            <div className="navRight" isToggle='false'>
                <button className='btn'>start free trial</button>
                <button className='hamburger' onClick={handleToggle}><img src={hamburger} alt="menu bar" /></button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavigationBar