import { useState, useEffect } from 'react';
import Card from './Card';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const updateScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (isLargeScreen) {
        return prevIndex === 0 ? Math.ceil(items.length / 2) - 1 : prevIndex - 1;
      } else {
        return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (isLargeScreen) {
        return prevIndex === Math.ceil(items.length / 2) - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === items.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: isLargeScreen
            ? `translateX(-${currentIndex * 50}%)`
            : `translateX(-${currentIndex * 100}%)`,
        }}
      >

        {items.map((item) => (
          <div key={item} className="w-full md:w-1/2 flex-shrink-0">
            <div className='flex justify-center items-center py-8 px-4 gap-x-10'> 
              <Card />
            </div>
          </div>
        ))}


      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black text-black px-4 py-2 opacity-75 hover:opacity-100 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 opacity-75 hover:opacity-100"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
