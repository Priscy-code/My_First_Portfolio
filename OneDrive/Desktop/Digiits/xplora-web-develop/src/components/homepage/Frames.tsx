import Frame1 from '@/assets/images/frame-1.svg';
import Frame2 from '@/assets/images/frame-2.svg';
import Frame3 from '@/assets/images/frame-3.svg';
import Frame4 from '@/assets/images/frame-4.svg';
import Frame5 from '@/assets/images/frame-5.svg';
import Frame6 from '@/assets/images/frame-6.svg';
import Frame7 from '@/assets/images/frame-7.svg';
import Frame8 from '@/assets/images/frame-8.svg';
import Frame9 from '@/assets/images/frame-9.svg';
import Frame10 from '@/assets/images/frame-10.svg';

// import BackgroundImage from '@/assets/images/bgImage.svg';  // Import the background image


const frames = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8, Frame9, Frame10];

const Frames = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 w-full lg:w-[800px] h-screen md:h-[180vh] lg:rotate-[6deg] absolute lg:left-[-70px] sm:top-[-20vh] overflow-hidden">

      <div className="absolute inset-0 bg-black opacity-40 md:opacity-20 lg:opacity-10  z-10"></div>

      <div className="carousel-container animate-carousel-up">
        {frames.map((frame, index) => (
          <img key={index} src={frame} alt={`Frame ${index + 1}`} className="frame-image" />
        ))}
        {frames.map((frame, index) => (
          <img key={index + frames.length} src={frame} alt={`Frame ${index + 1}`} className="frame-image" />
        ))}
      </div>

      <div className="carousel-container animate-carousel-down">
        {frames.map((frame, index) => (
          <img key={index} src={frame} alt={`Frame ${index + 1}`} className="frame-image" />
        ))}

        {frames.map((frame, index) => (
          <img key={index + frames.length} src={frame} alt={`Frame ${index + 1}`} className="frame-image" />
        ))}
      </div>
    </div>
  );
};

export default Frames;
