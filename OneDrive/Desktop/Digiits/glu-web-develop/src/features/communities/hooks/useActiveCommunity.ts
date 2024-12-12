import {useContext} from 'react';
import { ActiveCommunityContext } from '../context/ActiveCommunityContext';

export const useActiveCommunity = () => {
  const context = useContext(ActiveCommunityContext);
  if (!context) {
    throw new Error('useActiveCommunity must be used within a ActiveCommunityProvider');
  }
  return context;
};