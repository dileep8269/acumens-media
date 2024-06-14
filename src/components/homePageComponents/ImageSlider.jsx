/* eslint-disable react/prop-types */
import './ImageSlider.css'; 

const ImageSlider = ({images}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
         <div className="animate-scroll lg:gap-x-36"> 
        {images?.map((image, index) => (
          <div key={index} className='relative w-auto h-auto text-black bg-transparent overflow-hidden mr-10 md:mr-0'>

            <img
              src={image}
              alt={`Slide ${index}`}
              className='w-full h-full object-contain'
            />
          </div>
        ))}
        {images?.map((image, index) => (
          <div key={index} className='relative w-auto h-auto text-black bg-transparent overflow-hidden hidden md:block md:mr-0'>
            <img
              src={image}
              alt={`Slide ${index}`}
              className='w-full h-full object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
