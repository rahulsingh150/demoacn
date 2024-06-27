import React, { useState } from 'react';
import news1 from '../Assests/Media/1.jpg';
import news2 from '../Assests/Media/2.jpg';
import news3 from '../Assests/Media/3.jpg';
import news4 from '../Assests/Media/4.jpg';
import news5 from '../Assests/Media/5.jpg';
import news6 from '../Assests/Media/6.jpeg';
import news7 from '../Assests/Media/7.jpeg';
import news8 from '../Assests/Media/8.jpeg';
import '../Styles/HorizontalScrollGallery.css';

const images = [
  { src: news1 },
  { src: news1 },
  { src: news1 },
  { src: news2 },
  { src: news3 },
  { src: news4 },
  { src: news5 },
  { src: news6 },
  { src: news6 },
  { src: news6 },
  { src: news7 },
  { src: news8 },
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
    <div style={{ margin: '40px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Media Center</h2>
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
