import { Forum } from '../features/forums/interfaces/ForumsInterfaces';
import ForumsImg1 from '../assets/feed/forums/forum-img1.svg';
import ForumsImg2 from '../assets/feed/forums/forum-img2.svg';
import ForumsImg3 from '../assets/feed/forums/forum-img3.svg';

export const mockForums: Forum[] = [
    {
        id: '1',
        title: 'Discovering Nairobi: Hidden Gems Wanted!',
        author: {
            name: 'Williams Chidiebre',
            avatar: ForumsImg1,
            location: 'Texas'
        },
        content: "Hey Nairobi explorers! 🌆 Just landed in this vibrant city and ready to dive into its rich culture. Seeking recommendations on the best hidden gems to explore. Whether it's cozy cafes, scenic parks, or off-the-beaten-path neighborhoods, share your favorite local spots below!",
        category: 'Culture',
        tags: ['Meetups/Events'],
        likes: 12,
        dislikes: 8,
        comments: 124,
        createdAt: '2 Hrs'
    },

    {
        id: '2',
        title: 'Taste of Florida: Culinary Delights Await!',
        author: {
            name: 'Esther Kingston',
            avatar: ForumsImg2,
            location: 'Dunsonian, Florida',
        },
        content: "Calling all food enthusiasts in Florida! 🍽️ Craving some local flavor? Searching for the best culinary experiences the city has to offer. From street food vendors to traditional eateries, where can I find the most delectable dishes in town? Share your top picks and let's embark on a gastronomic adventure!",
        category: 'Announcement',
        tags: ['Announcement'],
        likes: '1.2K',
        dislikes: 8,
        comments: 124,
        createdAt: '2 Hrs',
    },

    {
        id: '3',
        title: 'Where to start?',
        author: {
            name: 'David Benson',
            avatar: ForumsImg3,
            location: 'Yaba, Texas',
        },
        content: "New expat in Texas seeking guidance! 🌍 Looking for tips on neighborhoods, local eats, and hidden gems. Any recommendations? Drop them below or shoot me a message. Let's connect and make this expat journey in Texas unforgettable! 🇳🇬✨",
        category: 'Help/Advice',
        tags: ['Need Help/Advice'],
        likes: '1.2K',
        dislikes: 8,
        comments: 124,
        createdAt: '2 Hrs',
    }
];