import React, { useState, useEffect, useRef } from 'react';
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
  { src: news1, year: '2024' },
  { src: news1, year: '2024' },
  { src: news1, year: '2024' },
  { src: news2, year: '2024' },
  { src: news3, year: '2024' },
  { src: news4, year: '2024' },
  { src: news5, year: '2023' },
  { src: news6, year: '2023' },
  { src: news6, year: '2023' },
  { src: news6, year: '2023' },
  { src: news7, year: '2023' },
  { src: news8, year: '2023' },
];

const groupImagesByYear = (images) => {
  return images.reduce((acc, image) => {
    const year = image.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(image);
    return acc;
  }, {});
};

const HorizontalScrollGallery = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRefs = useRef({});

  const groupedImages = groupImagesByYear(images);

  useEffect(() => {
    const scrollIntervals = {};

    Object.keys(groupedImages).forEach((year) => {
      const scrollContainer = scrollRefs.current[year];
      if (scrollContainer) {
        const startScrolling = () => {
          if (scrollIntervals[year]) {
            clearInterval(scrollIntervals[year]);
          }
          scrollIntervals[year] = setInterval(() => {
            scrollContainer.scrollLeft += 2;
          }, 30);
        };

        // startScrolling();
        if (!isHovering) {
          startScrolling();
        }

        scrollContainer.addEventListener('mouseenter', () => {
          clearInterval(scrollIntervals[year]);
        });

        scrollContainer.addEventListener('mouseleave', startScrolling);
      }
    });

    return () => {
      Object.keys(scrollIntervals).forEach((year) => {
        clearInterval(scrollIntervals[year]);
      });
    };
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="media-center">
    <h1 style={{textAlign: 'center'}}>Media Center</h1>
      {Object.keys(groupedImages).map((year) => (
        <div key={year} className="year-group">
          <div className="year-header">
            <span className="year">{year}</span>
          </div>
          <div
            className="scroll-container"
            ref={(el) => (scrollRefs.current[year] = el)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {groupedImages[year].map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image.src}
                  alt={`image-${index}`}
                  className="scroll-image"
                  onClick={() => handleImageClick(image.src)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
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
