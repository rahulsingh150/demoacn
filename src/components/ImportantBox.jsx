import React from "react";
import "../Styles/ImportantBox.css";
function ImportantBox({ BoxHeading, NewsAndAnnouncement ,Image}) {
  const newsData = NewsAndAnnouncement.map((item) => (
    <p className="Important-Par" key={item.id}>
      <a href={item.href} className="Important-data">
        {item.NewsName} {" "}
        {
          BoxHeading === "News & Announcement" ? <img src={Image} alt={item.id} /> : ''
        }
        
      </a>
    </p>
  ));
  return (
    <div className="Important-Box">
      <div className="Important-Heading">
        <p>{BoxHeading}</p>
      </div>
      <div className="Important-Content">{newsData}</div>
    </div>
  );
}

export default ImportantBox;
