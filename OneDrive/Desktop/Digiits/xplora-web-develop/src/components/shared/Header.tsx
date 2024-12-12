import { useEffect, useState } from 'react';
import LogoWhite from '@/assets/icons/xplora-logo-white.svg';
// import LogoBlack from '@/assets/icons/xplora-logo-black.svg';

const Header = () => {
  const [currenttime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes} ${now.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2]}`;
    setCurrentTime(timeString);
  };

  useEffect(() => {
    updateTime(); 
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className=" container mx-auto fixed top-0 left-0 right-0 bg-transparent font-inter py-5 sm:py-8 px-4 flex items-center justify-between z-20">
      <img src={LogoWhite} alt="Xplora" className="w-36" />

      <p className='text-white sm:text-black'>
        {currenttime}
      </p>
    </header>
  );
};

export default Header;
