import React, { useState } from 'react';
import './Gallery.css'; // Ensure this file has the necessary styles

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track the index of selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  // Sample image data (update with your actual local image names)
  const images = [
    { id: 1, src: '/images/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/image3.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/image4.jpg', alt: 'Image 4' },
    { id: 5, src: '/images/image5.jpg', alt: 'Image 5' },
    { id: 6, src: '/images/image6.jpg', alt: 'Image 6' },
  ];

  // Function to open modal with selected image
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to the next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {/* Render images in a grid */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Modal for viewing larger image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="image-container">
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="full-screen-image"
              />
            </div>
            <button className="close-button" onClick={closeModal}>X</button>
            <div className="navigation-buttons">
              <button className="prev-button" onClick={prevImage}>❮</button>
              <button className="next-button" onClick={nextImage}>❯</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
