import { Community } from '../features/communities/interfaces/CommunitiesInterfaces';
import Community1 from '../assets/feed/communities/comm-avatar-1.svg';
import Community1a from '../assets/feed/communities/comm1a.svg';
import Community1b from '../assets/feed/communities/comm1b.svg';
import Community1c from '../assets/feed/communities/comm1c.svg';
import Community1d from '../assets/feed/communities/comm1d.svg';
import Community1e from '../assets/feed/communities/comm1e.svg';

import Community2 from '../assets/feed/communities/comm-avatar-3.svg';
import Community2a from '../assets/feed/communities/comm2a.svg';
import Community2b from '../assets/feed/communities/comm2b.svg';
import Community2c from '../assets/feed/communities/comm2c.svg';
import Community2d from '../assets/feed/communities/comm2d.svg';
import Community2e from '../assets/feed/communities/comm2e.svg';

import Community3 from '../assets/feed/communities/comm-avatar-5.svg';
import Community3a from '../assets/feed/communities/comm3a.svg';
import Community3b from '../assets/feed/communities/comm3b.svg';
import Community3c from '../assets/feed/communities/comm3c.svg';
import Community3d from '../assets/feed/communities/comm3d.svg';
import Community3e from '../assets/feed/communities/comm3e.svg';

import Community4 from '../assets/feed/communities/comm-avatar-7.svg';
import Community4a from '../assets/feed/communities/comm4a.svg';
import Community4b from '../assets/feed/communities/comm4b.svg';
import Community4c from '../assets/feed/communities/comm4c.svg';
import Community4d from '../assets/feed/communities/comm4d.svg';
import Community4e from '../assets/feed/communities/comm4e.svg';

import Sugg1a from '../assets/manage-communities/sugg-1a.svg';
import Sugg1b from '../assets/manage-communities/sugg-1b.svg';
import Sugg1c from '../assets/manage-communities/sugg-1c.svg';
import Sugg2a from '../assets/manage-communities/sugg-2a.svg';
import Sugg2b from '../assets/manage-communities/sugg-2b.svg';
import Sugg2c from '../assets/manage-communities/sugg-2c.svg';
import Sugg3a from '../assets/manage-communities/sugg-3a.svg';
import Sugg3b from '../assets/manage-communities/sugg-3b.svg';
import Sugg3c from '../assets/manage-communities/sugg-3c.svg';


import BackgroundImage from '../assets/manage-communities/gallery-1.svg';
import GalleryImage1 from '../assets/manage-communities/gallery-1a.svg';
import GalleryImage2 from '../assets/manage-communities/gallery-1b.svg';
import GalleryImage3 from '../assets/manage-communities/gallery-1c.svg';

export const mockCommunities: Community[] = [
    {
        id: 1,
        name: 'Cultural Texas',
        location: 'Texas, USA',
        membersCount: '5.9K',
        image: Community1,
        memberImages: [Community1a, Community1b, Community1c, Community1d, Community1e],
        contentImages: [Sugg1a, Sugg1b, Sugg1c],
        postsCount: '2K+',
        description: 'A vibrant community for immigrants and locals alike, celebrating the rich cultural tapestry of Texas. Join us to connect, share experiences, and explore the diverse arts, traditions, and flavors of this dynamic city. Whether you\'re new to Texas or a seasoned resident, immerse yourself in our welcoming community and discover the heartbeat of Texas together.',
        createdAt: '26th May, 2024',
        backgroundImage: BackgroundImage,
        galleryImages: [GalleryImage1, GalleryImage2, GalleryImage3],
        tags: ['Culture', 'Texasians'],
    },
    {
        id: 2,
        name: 'Small London (Abriba)',
        location: 'Texas, USA',
        membersCount: '1.3K',
        image: Community2,
        memberImages: [Community2a, Community2b, Community2c, Community2d, Community2e],
        contentImages: [Sugg2a, Sugg2b, Sugg2c],    
        postsCount: '2K+',
        description: 'A vibrant community for immigrants and locals alike, celebrating the rich cultural tapestry of Texas. Join us to connect, share experiences, and explore the diverse arts, traditions, and flavors of this dynamic city. Whether you\'re new to Texas or a seasoned resident, immerse yourself in our welcoming community and discover the heartbeat of Texas together.',
        createdAt: '26th May, 2024',
        backgroundImage: BackgroundImage,
        galleryImages: [GalleryImage1, GalleryImage2, GalleryImage3],
        tags: ['Culture', 'Texasians'],
    },
    {
        id: 3,
        name: 'Women in Texas',
        location: 'Texas, USA',
        membersCount: '631',
        image: Community3,
        memberImages: [Community3a, Community3b, Community3c, Community3d, Community3e],
        contentImages: [Sugg3a, Sugg3b, Sugg3c],
        postsCount: '2K+',
        description: 'A vibrant community for immigrants and locals alike, celebrating the rich cultural tapestry of Texas. Join us to connect, share experiences, and explore the diverse arts, traditions, and flavors of this dynamic city. Whether you\'re new to Texas or a seasoned resident, immerse yourself in our welcoming community and discover the heartbeat of Texas together.',
        createdAt: '26th May, 2024',
        backgroundImage: BackgroundImage,
        galleryImages: [GalleryImage1, GalleryImage2, GalleryImage3],
        tags: ['Culture', 'Texasians'],
    },
    {
        id: 4,
        name: 'Immigrant Texasians',
        location: 'Texas, USA',
        membersCount: '1.3K',
        image: Community4,
        memberImages: [Community4a, Community4b, Community4c, Community4d, Community4e],
        contentImages: [Sugg2a, Sugg2b, Sugg2c],
        postsCount: '2K+',
        description: 'A vibrant community for immigrants and locals alike, celebrating the rich cultural tapestry of Texas. Join us to connect, share experiences, and explore the diverse arts, traditions, and flavors of this dynamic city. Whether you\'re new to Texas or a seasoned resident, immerse yourself in our welcoming community and discover the heartbeat of Texas together.',
        createdAt: '26th May, 2024',
        backgroundImage: BackgroundImage,
        galleryImages: [GalleryImage1, GalleryImage2, GalleryImage3],
        tags: ['Culture', 'Texasians'],
    }

];