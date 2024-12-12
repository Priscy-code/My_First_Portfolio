import { Post } from '../features/posts/interfaces/PostInterfaces';
import PostMember from '../assets/feed/members/member-1.svg';
import PostMember2 from '../assets/feed/members/post-member-2.svg';
import PostImage1 from '../assets/feed/images/post1-img1.svg';
import PostImage2 from '../assets/feed/images/post2-img2.svg';
import PostImage3 from '../assets/feed/images/post3-img3.svg';
import AudioPost from '../assets/feed/images/audio-post.svg';
import VideoPost from '../assets/Post3.mp4';

export const mockPosts: Post[] = [
  {
    id: 1,
    user: {
      name: 'Katherine Nyadanu',
      profileImage: PostMember,
      isVerified: true,
    },
    timestamp: '2 Hrs',
    location: 'Dansoman',
    content: {
      text: 'Exploring my new home! From bustling markets to serene parks, every corner holds a new adventure. Feeling grateful for the opportunity to immerse myself in this vibrant culture',
      hastag: '#NewBeginnings #ImmigrantLife'
    },
    media: [
      PostImage1,
      PostImage2,
      PostImage3,
      PostImage1,
      PostImage2,
      PostImage3,
      PostImage1,
      PostImage2,
    ],
    likes: 86,
    comments: 14,
    shares: 8,
    likedBy: 'Nana Opoku, Justin Effiong',
    likedByCount: 134
  },
  {
    id: 2,
    user: {
      name: 'Akligo Nathaniel',
      profileImage: PostMember2,
      isVerified: true,
    },
    timestamp: '2 Hrs',
    location: 'Dansoman',
    content: {
      text: 'Exploring my new home! From bustling markets to serene parks, every corner holds a new adventure. Feeling grateful for the opportunity to immerse myself in this vibrant culture',
      hastag: '#NewBeginnings #ImmigrantLife'
    },
    media: [
      AudioPost
    ],
    likes: 86,
    comments: 14,
    shares: 8,
    likedBy: 'Nana Opoku, Justin Effiong',
    likedByCount: 134
  },
  {
    id: 3,
    user: {
      name: 'Katherine Nyadanu',
      profileImage: PostMember,
      isVerified: true,
    },
    timestamp: '2 Hrs',
    location: 'Dansoman',
    content: {
      text: 'Exploring my new home! From bustling markets to serene parks, every corner holds a new adventure. Feeling grateful for the opportunity to immerse myself in this vibrant culture',
      hastag: '#NewBeginnings #ImmigrantLife'
    },
    media: [
      {
        type: 'video',
        url: VideoPost,
        title: 'Beautiful Interior Detail'
      },
    ],
    likes: 86,
    comments: 14,
    shares: 8,
    likedBy: 'Nana Opoku, Justin Effiong',
    likedByCount: 134
  }
];