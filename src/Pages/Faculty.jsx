import React from "react";
import "../Styles/Faculty.css";
import Staff from'../Assests/Faculty/1.jpg'
import Staff1 from'../Assests/Faculty/2.png'
function Faculty() {
  return (
    <>
    <div className="card-container-People">
        <div className="card-people">
            <h1 style={{textAlign: "center",marginTop: '20px', textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>Teaching & Research Staff</h1>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={Staff} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginRight: "10px"}}>Dr. Rakesh Kr. Singh</h4>
                    <p>Ph.D.</p>
                    <p>Head of the Centre</p>
                    <p>www.drrakeshsingh.com</p>
                </div>
            </div>
            <div className="card-people-item">
                <div className="card-people-img">
                    <img src={Staff1} alt="PeoplePage"/>
                </div>
                <div className="card-people-text">
                    <h4 style={{marginBottom: "10px"}}>Dr. Vijay Kumar Ravi</h4>
                    <p>Ph.D.</p>
                    <p>Guest Asst. Professor</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Faculty;
