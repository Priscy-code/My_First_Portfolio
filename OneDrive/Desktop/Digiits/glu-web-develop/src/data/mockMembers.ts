import Member1 from '../assets/feed/members/member-1.svg';
import Member2 from '../assets/feed/members/member-2.svg';
import Member3 from '../assets/feed/members/member-3.svg';
import Member4 from '../assets/feed/images/comment-img-1.svg';
import Member5 from '../assets/feed/images/comment-img-2.svg';
import Member6 from '../assets/feed/members/member-6.svg';
import Member7 from '../assets/feed/members/member-7.svg';
import Member8 from '../assets/feed/members/member-8.svg';
import AllMember1 from '../assets/feed/members/member-4.svg';
import AllMember2 from '../assets/feed/members/member-5.svg';
import { Member } from '../components/shared/members/interfaces/MembersInterfaces';

export const mockMembers: Member[] = [
  {
    id: 1,
    name: 'Katherine Nyadanu',
    image: Member1,
    friendsCount: 256,
    postsCount: 26,
    isVerified: true,
  },
  {
    id: 2,
    name: 'Akligo Kingsley',
    image: Member2,
    friendsCount: 256,
    postsCount: 26,
    isVerified: true,
  },
  {
    id: 3,
    name: 'Jasmine Johnson',
    image: Member3,
    friendsCount: 256,
    postsCount: 26,
    isVerified: true,
  },
  {
    id: 4,
    name: 'Katherine Nyadanu',
    image: AllMember1,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 5,
    name: 'Akligo Kingsley',
    image: AllMember2,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 6,
    name: 'Jasmine Johnson',
    image: Member3,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 7,
    name: 'Katherine Nyadanu',
    image: Member4,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 8,
    name: 'Akligo Kingsley',
    image: Member5,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 9,
    name: 'Jasmine Johnson',
    image: Member6,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 10,
    name: 'Akligo Kingsley',
    image: Member7,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
  {
    id: 11,
    name: 'Jasmine Johnson',
    image: Member8,
    friendsCount: 256,
    postsCount: 26,
    isVerified: false,
  },
];