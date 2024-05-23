import { useState, useEffect } from 'react';

const images = [
  'box-1.webp',
  'box-2.webp',
  'box-3.webp',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-72 h-96 overflow-hidden rounded-[40px]">
      <div className="absolute w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index}`}
            className={`absolute w-full h-auto object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
