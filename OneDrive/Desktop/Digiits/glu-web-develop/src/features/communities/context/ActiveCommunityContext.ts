import {createContext} from 'react';
import { ActiveCommunity } from '../interfaces/ActiveCommunityInterfaces';

export const ActiveCommunityContext = createContext<ActiveCommunity | undefined>(undefined);
