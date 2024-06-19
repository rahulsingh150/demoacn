import React from "react";
import "../Styles/Institute.css";
import Carousels from "./Carousels";
import ImportantBox from "./ImportantBox";
import { Link } from "react-router-dom";
const BoxHeading = "News & Announcement";
const BoxHeadingSecond = "Important Links";
const Image = "https://akucgs.vercel.app/assets/new.gif";
const NewsAndAnnouncement = [
  {
    id: 0,
    NewsName: "Admission 2024",
    href: 'https://adms.akubihar.ac.in/',
  },
  {
    id: 1,
    NewsName: "SNN Prospectus 2024",
    href: '/PROSPECTUS2024.pdf',
  },
  {
    id: 2,
    NewsName: "Centres Notification 2024",
    href: "/Centres Notification.pdf",
  },
];

const ImportantLinks = [
  {
    id: 0,
    NewsName: "Admission Procedure 2024",
    href: "/Admission.pdf",
  },
];

function Institute() {
  return (
    <>
      <div className="Institute-tab">
        <div className="Institute-tab-one">
          <Carousels />
          <ImportantBox
            NewsAndAnnouncement={NewsAndAnnouncement}
            Image={Image}
            BoxHeading={BoxHeading}
          />
        </div>
        <div className="Institute-tab-two">
          <div>
            <Link to="/horizontalScrollGallery" style={{ textDecoration: "none" }}>
              <div style={{
                width: '340px',
                height: '70px',
                padding: '10px',
                backgroundColor: 'rgb(240, 240, 240)',
                margin: '10px',
                position: 'relative',
                bottom: '5px',
                display: 'flex'
              }} className="Meadia-res">
                <div style={{
                  backgroundColor: 'rgb(120, 0, 0)',
                  borderRadius: '50%',
                  width: '50px',
                  height: '98%'
                }}>
                  <img
                    src="https://sjmc.ac.in/static/media/media_center_logo.cf1cb1d00c99c1405854.png"
                    style={{ width: '100%', height: 'auto' }}
                    alt="Media Center Logo"
                  />
                </div>
                <div style={{ marginLeft: '15px', marginTop: '10px' }}>
                  <h4>Media Center</h4>
                </div>
              </div>
            </Link>
            <ImportantBox
              NewsAndAnnouncement={ImportantLinks}
              Image={Image}
              BoxHeading={BoxHeadingSecond}
            />


          </div>


          <div className="Institute-tab-content" style={{ marginLeft: '10px' }}>
            <h3 style={{ textAlign: "justify" }}>
              Aryabhatta Center for Nanoscience & Technology(ACNN) is non-traditional, super specialized, frontier areas of subject of 21st century& first cutting edge Research Centre of university of Bihar, equipped with 20 high-end research instruments such as Scanning Electron Microscope, Multiferroic system, Vibrating Sample magnetometer, High energy ball mill etc. This is only one such frontiers related academic center in universities of Bihar. The Nanoscience and nanotechnology center of Aryabhatta Knowledge University was Established by the founder Vice Chancellor Prof. S N Guha with whole hearted support and encouragement from Honorable Chief minister Sri Nitish Kumar Ji. The first academic session of M.Tech and Ph.D. started from academic from year 2013. The academic and research activities of this Center visited/appreciated by Hon’ble Governor cum Chancellor Universities of Bihar, Hon’ble Chief minister Sri Nitish Kumar Ji, Education ministers ,various Govt. officers and eminent academicians of national/International repute.
            </h3>
            <br />
            <h3 style={{ textAlign: "justify" }}>
              Different affairs of academic, research &development programme are being carried out under the leadership of Dr. Rakesh Kumar Singh, head of the Nanoscience center(i/c) , who have been also awarded “ Best Young Teacher with Contributions in modern field of Nanoscience” by Hon’ble Chancellor of university of Bihar cum Governor for his outstanding performance . In the last 10 year more than 1000 eminent academicians/Scholars from different parts of world/country/state visited Nanoscience center of Aryabhatta Knowledge University. About more than 200 research papers published/ final progress in SCI/Scopus/WoS/Peer reviewed Journals by Nanotechnology center in multidisciplinary area of Science, Engineering & technology including Engineering Science, Agriculture, Electronics, Medicine, Food, and Ayurveda and Basic Sciences. 2 patents and 2 prototype have been filed/developed in the field of low cost LED, Agriculture and purification of water.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute;
