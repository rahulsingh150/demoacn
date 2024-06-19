import React from 'react'
import "../Styles/Faculty.css";
import one from '../Assests/Faculty/8.jpg'
import two from '../Assests/Faculty/9.jpg'
import three from '../Assests/Faculty/10.jpg'
import four from '../Assests/Faculty/11.jpg'
import five from '../Assests/Faculty/12.jpg'
import six from '../Assests/Faculty/13.jpg'
function Staff() {
  return (
    <>
    <div className="card-container-People">
        <div className="card-people">
            <h1 style={{textAlign: "center",marginTop: '20px', textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>Support Staff</h1>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={one} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginRight: "10px"}}>Mrs. Dolly Ghosh</h4>
                    <p>Library Assistant</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={two} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Mr. Kumar Yashupal</h4>
                    <p>Clerk cum Computer Typist</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={three} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Mr. Ramjee Kumar</h4>
                    <p>Account Assistant</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={four} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Mr. Kumar Vijay</h4>
                    <p>Store-keeper</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={five} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Mr. Aditya Kumar</h4>
                    <p>Assistant</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={six} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Mr. Dilip Kumar Choudhary</h4>
                    <p>Attendant</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Staff