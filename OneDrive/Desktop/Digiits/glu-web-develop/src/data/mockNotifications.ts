import { Notification } from '../components/shared/notifications/interfaces/NotifcationInterfaces';

import NotImg1 from '../assets/feed/images/not-1.svg';
import NotImg2 from '../assets/feed/images/not-2.svg';
import NotImg3 from '../assets/feed/images/not-3.svg';
import NotImg4 from '../assets/feed/images/not-4.svg';
import NotImg5 from '../assets/feed/images/not-5.svg';

export const mockNotifications: Notification[] = [
  {
    id: 1,
    title: 'New post from Nenpan Malik in Texas Immigrants',
    type: 'post',
    user: 'Nenpan Malik',
    community: 'Texas Immigrants',
    timestamp: '2 Hours ago',
    likes: 12,
    image: NotImg1,
  },
  {
    id: 2,
    title: 'New recommendation from Nenpan Malik in Texas Immigrants',
    type: 'recommendation',
    user: 'Nenpan Malik',
    community: 'Texas Immigrants',
    timestamp: '4 Hours ago',
    likes: 2,
    image: NotImg2,
  },
  {
    id: 3,
    title: 'UI/UX Designer needed in Lekki Phase 1',
    type: 'job',
    saves: 100,
    date: 'Fri 12th May',
    image: NotImg3,
  },
  {
    id: 4,
    type: 'event',
    title: 'Texas Immigrants',
    interested: '1.2K',
    date: 'Fri 12th May',
    image: NotImg4,
  },
  {
    id: 5,
    title: 'New friend request from Nonso Diken',
    type: 'friendRequest',
    user: 'Nonso Diken',
    date: 'Mon 3rd May',
    image: NotImg5,
  },
];