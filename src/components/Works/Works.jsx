import React from 'react'
import workImg1 from '../../assets/img/workImags/workImg1.png'
import workImg2 from '../../assets/img/workImags/workImg2.png'
import workImg3 from '../../assets/img/workImags/workImg3.png'
import workImg4 from '../../assets/img/workImags/workImg4.png'
import dots from '../../assets/img/workImags/dots.png'

const Works = () => {
  return (
    <>
        {/* Works Section */}
        <section className="worksArea pt8">
            <div className="container">
                {/* Works */}
                <div className="works">
                  {/* Works Title */}
                  <div className="worksTop">
                    <h2 className="worksTitle">brave make global</h2>
                    <p className="worksSubtitle">Create consistent assets for you and your team. Brave Hunt makes it easier than ever to create, edit, and share Image, art and Illustration.</p>
                  </div>
                  {/* Works and Catagories */}
                  <div className="worksBottom">
                    {/* Navigation Catagories */}
                    <div className="worksNav">
                      <a className="worksNavLink" href="#">all</a>
                      <a className="worksNavLink" href="#">illustration</a>
                      <a className="worksNavLink" href="#">photography</a>
                      <a className="worksNavLink" href="#">design</a>
                      <a className="worksNavLink" href="#">3D</a>
                      <a className="worksNavLink" href="#">logos</a>
                      <a className="worksNavLink" href="#">art</a>
                      <a className="worksNavLink" href="#">architecture</a>
                    </div>
                    {/* Works Card */}
                    <div className="worksCards">
                      {/* Single Card */}
                      <div className="worksSingleCard">
                        <img src={workImg1} alt="" />
                        <h4 className="worksCardTitle">illustration art</h4>
                        <p className="worksCardSubtitle">ariana</p>
                      </div>
                      {/* Single Card */}
                      <div className="worksSingleCard">
                        <img src={workImg2} alt="" />
                        <h4 className="worksCardTitle">illustration art</h4>
                        <p className="worksCardSubtitle">ariana</p>
                      </div>
                      {/* Single Card */}
                      <div className="worksSingleCard">
                        <img src={workImg3} alt="" />
                        <h4 className="worksCardTitle">illustration art</h4>
                        <p className="worksCardSubtitle">ariana</p>
                      </div>
                      {/* Single Card */}
                      <div className="worksSingleCard">
                        <img src={workImg4} alt="" />
                        <h4 className="worksCardTitle">illustration art</h4>
                        <p className="worksCardSubtitle">ariana</p>
                      </div>
                    </div>
                    <img src={dots} alt="" />
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Works