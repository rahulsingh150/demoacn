import React from 'react'
import "../Styles/Faculty.css";
import one from '../Assests/Faculty/3.jpg'
import two from '../Assests/Faculty/4.jpg'
import three from '../Assests/Faculty/5.jpg'
import four from '../Assests/Faculty/7.jpg'
function Team() {
  return (
    <>
    <div className="card-container-People">
        <div className="card-people">
            <h1 style={{textAlign: "center",marginTop: '20px', textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>Our Team</h1>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={one} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginRight: "10px"}}>Mr. Nishant Kumar</h4>
                    <p>M.Tech (Nanoscience & Nanotechnology)</p>
                    <p>Technical Assistant</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={two} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Miss Monalisa</h4>
                    <p>M.Tech (Nanoscience & Nanotechnology)</p>
                    <p>Technical Assistant</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={three} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Miss Anuradha Muskan</h4>
                    <p>M.Tech (Nanoscience & Nanotechnology)</p>
                    <p>Technical Assistant</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={four} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Mr. Prince Kumar</h4>
                    <p>M.Tech (Nanoscience & Nanotechnology)</p>
                    <p>Technical Assistant</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team