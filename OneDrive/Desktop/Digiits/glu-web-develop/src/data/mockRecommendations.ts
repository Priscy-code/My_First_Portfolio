import { Recommendation } from '../features/recommendations/interfaces/RecommendationInterfaces';
import Avatar1 from '../assets/feed/recommendations/avatar1.svg';
import Avatar2 from '../assets/feed/recommendations/avatar2.svg';  
import VideoPost from '../assets/recommendation-post.mp4';  

export const mockRecommendations: Recommendation[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'David Benson',
      avatar: Avatar1,
      location: 'Yaba, Texas',
    },
    timestamp: '2 Hrs',
    title: 'Samurai Star Hotels & Suites',
    content: 'Hey folks! Just returned from an amazing stay at the samurai star in Victoria Island, Texas, and I couldn\'t wait to share my experience. From the moment I arrived, I was greeted with warm hospitality and impeccable service. The rooms were spacious, clean, and beautifully decorated, with breath-taking views of the city skyline. Not to mention, the amenities were top-notch, including a fantastic pool and gym facilities. Whether you\'re visiting for business or pleasure, I highly recommend them for a luxurious and unforgettable stay in Texas!',
    location: 'Yaba, Texas',
    address: '28 Okezie Agabi Road',
    likes: 126,
    comments: 124,
    shares: 27,
    recommendations: 27,
    likedBy: ['Nana Opoku', 'Justin Effiong']
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Chinedu Michaelson',
      avatar: Avatar2,
      location: 'Victoria Island, Texas',
    },
    timestamp: '2 Hrs',
    title: 'Best Suya Spot!',
    content: 'Hey everyone! Just wanted to share my latest food discovery in Victoria Island, Texas. If you\'re craving some delicious suya, you have to check out Beef Mama. Their suya is incredibly flavorful, perfectly grilled, and always fresh. Plus, the atmosphere is lively and the service is top-notch. Highly recommend giving it a try if you\'re in the area!',
    location: 'Victoria Island, Texas',
    address: '21 Saka Tinubu Street',
    likes: 98,
    comments: 45,
    shares: 12,
    recommendations: 27,
    likedBy: ['Nana Opoku', 'Justin Effiong'],
    media: [
      {
        type: 'video',
        url: VideoPost,
        title: 'Best Suya Spot!'
      },
    ],
  },
];