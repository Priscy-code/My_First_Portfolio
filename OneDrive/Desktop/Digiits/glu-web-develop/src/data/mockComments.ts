import { Comment } from '../features/comments/interfaces/CommentInterfaces';
import User1 from '../assets/feed/images/comment-img-1.svg';
import User2 from '../assets/feed/images/comment-img-2.svg';

export const mockComments: Comment[] = [
  {
    id: 1,
    user: {
      name: 'Cynthia Morgana',
      profileImage: User1,
    },
    birthdate: '26th May, 2024',
    timestamp: '2 Hrs',
    content: 'Just had my first experience with the local cuisine and I\'m blown away! The flavors are amazing. Any recommendations for other must-try dishes or restaurants?',
    likes: 86,
    replies: []
  },
  {
    id: 2,
    user: {
      name: 'Dennis Washington',
      profileImage: User2,
    },
    birthdate: '26th May, 2024',
    timestamp: '2 Hrs',
    content: 'Hey everyone! I\'m new to the city and loving the energy here. Any recommendations for must-visit spots or events happening this weekend? Excited to explore and meet new people!',
    likes: 86,
    replies: [
      {
        id: 3,
        user: {
          name: 'Dennis Washington',
          profileImage: User1,
        },
        birthdate: '26th May, 2024',
        timestamp: '2 Hrs',
        content: 'Hey everyone! I\'m new to the city and loving the energy here. Any recommendations for must-visit spots or events happening this weekend? Excited to explore and meet new people!',
        likes: 86,
      },
    ]
  },
];