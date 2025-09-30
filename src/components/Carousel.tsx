import React from 'react';

type CarrouselProps = {
  images: string[];
}

const Carousel = ({images}: CarrouselProps ) => {
  if (!images || images.length === 0) return null;

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image: string, index: number) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
