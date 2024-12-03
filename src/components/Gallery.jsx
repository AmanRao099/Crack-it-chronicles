import React, { useState } from 'react';
import './Gallery.css'; // Make sure to link to the updated CSS

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const images = [
    
    { id: 2, src: '/images/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/image3.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/image4.jpg', alt: 'Image 4' },
    { id: 5, src: '/images/image5.jpg', alt: 'Image 5' },
    { id: 6, src: '/images/image6.jpg', alt: 'Image 6' },
    
    // More images if needed
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-header">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="image-container">
              <img src={selectedImage} alt="Selected" className="full-screen-image" />
            </div>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
