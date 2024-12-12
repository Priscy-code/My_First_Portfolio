import { useEffect, useState } from 'react';

export const useCurrentTime = (): string => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

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
  return currentTime;
  
}
