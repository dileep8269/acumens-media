/* eslint-disable react/prop-types */
import './ImageSlider.css'; 

const ImageSlider = ({images}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
         <div className="animate-scroll xs:gap-x-10 md:gap-x-20 lg:gap-x-32 xl:gap-x-40 2xl:gap-x-48"> 
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
