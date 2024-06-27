import React, { useState } from 'react';

import second1 from '../Assests/news photo/2023/1.jpeg'
import second2 from '../Assests/news photo/2023/asset 1.jpeg'
import second3 from '../Assests/news photo/2023/asset 10.jpeg'
import second4 from '../Assests/news photo/2023/asset 12.jpeg'
import second5 from '../Assests/news photo/2023/asset 13.jpeg'
import second6 from '../Assests/news photo/2023/asset 14.jpeg'
import second7 from '../Assests/news photo/2023/asset 15.jpeg'
import second8 from '../Assests/news photo/2023/asset 16.jpeg'
import second9 from '../Assests/news photo/2023/asset 17.jpeg'
import second10 from '../Assests/news photo/2023/asset 18.jpeg'
import second11 from '../Assests/news photo/2023/asset 19.jpeg'
import second12 from '../Assests/news photo/2023/asset 2.jpeg'
import second13 from '../Assests/news photo/2023/asset 20.jpeg'
import second14 from '../Assests/news photo/2023/asset 21.jpeg'
import second15 from '../Assests/news photo/2023/asset 22.jpeg'
import second16 from '../Assests/news photo/2023/asset 23.jpeg'
import second17 from '../Assests/news photo/2023/asset 24.jpeg'
import second18 from '../Assests/news photo/2023/asset 26.jpeg'
import second19 from '../Assests/news photo/2023/asset 27.jpeg'
import second20 from '../Assests/news photo/2023/asset 28.jpeg'
import second21 from '../Assests/news photo/2023/asset 29.jpeg'
import second22 from '../Assests/news photo/2023/asset 3.jpeg'
import second23 from '../Assests/news photo/2023/asset 30.jpeg'
import second24 from '../Assests/news photo/2023/asset 31.jpeg'
import second25 from '../Assests/news photo/2023/asset 33.jpeg'
import second26 from '../Assests/news photo/2023/asset 34.jpeg'
import second27 from '../Assests/news photo/2023/asset 35.jpeg'
import second28 from '../Assests/news photo/2023/asset 36.jpeg'
import second29 from '../Assests/news photo/2023/asset 37.jpeg'
import second30 from '../Assests/news photo/2023/asset 38.jpeg'
import second31 from '../Assests/news photo/2023/asset 39.jpeg'
import second32 from '../Assests/news photo/2023/asset 4.jpeg'
import second33 from '../Assests/news photo/2023/asset 41.jpeg'
import second34 from '../Assests/news photo/2023/asset 42.jpeg'
import second35 from '../Assests/news photo/2023/asset 43.jpeg'
import second36 from '../Assests/news photo/2023/asset 44.jpeg'
import second37 from '../Assests/news photo/2023/asset 45.jpeg'
import second38 from '../Assests/news photo/2023/asset 46.jpeg'
import second39 from '../Assests/news photo/2023/asset 47.jpeg'
import second40 from '../Assests/news photo/2023/asset 48.jpeg'
import second41 from '../Assests/news photo/2023/asset 49.jpeg'
import second42 from '../Assests/news photo/2023/asset 5.jpeg'
import second43 from '../Assests/news photo/2023/asset 50.jpeg'
import second44 from '../Assests/news photo/2023/asset 51.jpeg'
import second45 from '../Assests/news photo/2023/asset 52.jpeg'
import second46 from '../Assests/news photo/2023/asset 53.jpeg'
import second47 from '../Assests/news photo/2023/asset 56.jpeg'
import second48 from '../Assests/news photo/2023/asset 57.jpeg'
import second49 from '../Assests/news photo/2023/asset 58.jpeg'
import second50 from '../Assests/news photo/2023/asset 59.jpeg'
import second51 from '../Assests/news photo/2023/asset 60.jpeg'
import second52 from '../Assests/news photo/2023/asset 61.jpeg'
import second53 from '../Assests/news photo/2023/asset 62.jpeg'
import second54 from '../Assests/news photo/2023/asset 64.jpeg'
import second55 from '../Assests/news photo/2023/asset 65.jpeg'

import frist1 from '../Assests/news photo/2024/asset 11.jpeg'
import frist2 from '../Assests/news photo/2024/asset 32.jpeg'
import frist3 from '../Assests/news photo/2024/asset 54.jpeg'
import frist4 from '../Assests/news photo/2024/asset 55.jpeg'
import frist5 from '../Assests/news photo/2024/asset 9.jpeg'
import '../Styles/HorizontalScrollGallery.css';

const image24 = [
  { src: frist1 },
  { src: frist2 },
  { src: frist3 },
  { src: frist4 },
  { src: frist5 },
  { src: second26 },
  { src: second27 },
  { src: second28 },
  { src: second29 },
  { src: second30 },
  { src: second31 },
  { src: second32 },
  { src: second33 },
  { src: second34 },
  { src: second35 },
  { src: second36 },
  { src: second37 },
  { src: second38 },
  { src: second39 },
  { src: second40 },
  { src: second41 },
  { src: second42 },
  { src: second43 },
  { src: second44 },
  { src: second45 },
  { src: second46 },
  { src: second47 },
  { src: second48 },
  { src: second49 },
  { src: second50 },
  { src: second51 },
  { src: second52 },
  { src: second53 },
  { src: second54 },
  { src: second55 },
]

const images = [
  { src: second1 },
  { src: second2 },
  { src: second3 },
  { src: second4 },
  { src: second5 },
  { src: second6 },
  { src: second7 },
  { src: second8 },
  { src: second9 },
  { src: second10 },
  { src: second11 },
  { src: second12 },
  { src: second13 },
  { src: second14 },
  { src: second15 },
  { src: second16 },
  { src: second17 },
  { src: second18 },
  { src: second19 },
  { src: second20 },
  { src: second21 },
  { src: second22 },
  { src: second23 },
  { src: second24 },
  { src: second25 },
];

const HorizontalScrollGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div style={{ margin: '40px' ,background: '#f0e9e9'}}>
      <h2 style={{ fontWeight: 'bold' ,textAlign: "center" , padding: '10px'}} className='H2-Heading'>Media Center</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '150px',
            height: '50px',
            backgroundColor: 'rgb(120, 0, 0)',
            overflow: 'hidden',
            color: 'white',
            fontSize: '35px',
            textAlign: 'left',
            paddingLeft: '25px',
            paddingBottom: '18px',
          }}
        >
          2024
        </div>
        <div
          style={{
            width: '0px',
            height: '0px',
            borderTop: '50px solid transparent',
            borderLeft: '50px solid rgb(120, 0, 0)',
            paddingBottom: '1px',
          }}
        ></div>
      </div>
      <div className="autoslider">
        <div className="slide-track">
          {images.map((image, index) => (
            <div className="aslide" key={index}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '150px',
            height: '50px',
            backgroundColor: 'rgb(120, 0, 0)',
            overflow: 'hidden',
            color: 'white',
            fontSize: '35px',
            textAlign: 'left',
            paddingLeft: '25px',
            paddingBottom: '18px',
          }}
        >
          2023
        </div>
        <div
          style={{
            width: '0px',
            height: '0px',
            borderTop: '50px solid transparent',
            borderLeft: '50px solid rgb(120, 0, 0)',
            paddingBottom: '1px',
          }}
        ></div>
      </div>


      <div className="autoslider">
        <div className="slide-track">
          {image24.map((image, index) => (
            <div className="aslide" key={index}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button onClick={handleCloseModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalScrollGallery;
