import { TopThread } from '../features/forums/interfaces/ForumsInterfaces';

export const mockTopThreads: TopThread[] = [
  {
    id: '1',
    title: 'Discovering Nairobi: Hidden Gems W...',
    content: 'Hey Nairobi explorers! 👋 Just landed in this vibrant city and ready to dive into its rich culture. Seeking recommendati...',
    tag: { name: 'Need Help/Advice', color: 'yellow' }
  },
  {
    id: '2',
    title: 'Work-Life Balance in Cape Town: Tip...',
    content: 'Balancing work and play in Cape Town? 🏖️ Seeking advice on great coworking spaces, wellness retreats, or weekend...',
    tag: { name: 'Tips', color: 'blue' }
  },
  {
    id: '3',
    title: 'New in Dar es Salaam: Let\'s Connect!',
    content: 'Feeling like a newcomer in Dar es Salaam? Let\'s change that! 🙋 Looking to expand my social circle and connect...',
    tag: { name: 'Meetups/Events', color: 'pink' }
  },
  {
    id: '4',
    title: 'Navigating Texas: Transportation Tip...',
    content: 'Getting around Texas can be quite the adventure! 🚗 Seeking advice from seasoned locals on the most efficient...',
    tag: { name: 'General Info', color: 'blue' }
  },
  {
    id: '5',
    title: 'Taste of Florida: Culinary Delights Aw...',
    content: 'Calling all food enthusiasts in Florida! 🍽️ Craving some local flavor? Searching for the best culinary experiences the city...',
    tag: { name: 'General Info', color: 'blue' }
  }
];