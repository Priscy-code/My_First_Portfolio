import { useState, PropsWithChildren } from 'react';
import { ActiveCommunityContext } from '../context/ActiveCommunityContext';

export const ActiveCommunityProvider = ({ children }: PropsWithChildren<{}>) => {
  const [activeCommunity, setActiveCommunity] = useState('USA Home Community');

  return (
    <ActiveCommunityContext.Provider value={{ activeCommunity, setActiveCommunity }}>
      {children}
    </ActiveCommunityContext.Provider>
  );
};