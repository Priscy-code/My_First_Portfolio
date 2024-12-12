import { Event } from "../features/events/interfaces/EventsInterfaces";
import EventImg1 from '../assets/feed/events/event-img-1.svg';
import EventImg2 from '../assets/feed/events/event-img-2.svg';
import EventImg3 from '../assets/feed/events/event-img-3.svg';
import EventImg4 from '../assets/feed/events/event-img-4.svg';
import HostImg1 from '../assets/feed/events/avatar-1.svg';

export const mockEvents: Event[] = [
    {
        id: '1',
        eventImage: EventImg1,
        title: "Expat Networking Mixer: Connect, Collaborate, and Celebrate!",
        host: {
            name: "Akligo Kinglsey",
            avatar: HostImg1,
            friendCount: "256",
            postCount: "26"
        },
        content: "Calling all expats in the city! Join us for an evening of networking, collaboration, and celebration at our Expat Networking Mixer. Connect with fellow expats from around the world, exchange stories and experiences, and expand your professional and social networks. Whether you're new to the city or a long-time resident, this event is the perfect opportunity to meet like-minded individuals, forge new friendships, and discover exciting opportunities. Don't miss out on an evening filled with fun, laughter, and meaningful connections",
        location: "Victoria Island, Texas",
        date: "18th May, 2024",
        interestedNumber: "138",
        goingNumber: "85",
        likedBy: ['Nana Opoku', 'Justin Effiong']
    },
    {
        id: '2',
        eventImage: EventImg2,
        title: "Expat Networking Mixer: Connect, Collaborate, and Celebrate!",
        host: {
            name: "Akligo Kinglsey",
            avatar: HostImg1,
            friendCount: "256",
            postCount: "26"
        },
        content: "Calling all expats in the city! Join us for an evening of networking, collaboration, and celebration at our Expat Networking Mixer. Connect with fellow expats from around the world, exchange stories and experiences, and expand your professional and social networks. Whether you're new to the city or a long-time resident, this event is the perfect opportunity to meet like-minded individuals, forge new friendships, and discover exciting opportunities. Don't miss out on an evening filled with fun, laughter, and meaningful connections",
        location: "Victoria Island, Texas",
        date: "18th May, 2024",
        interestedNumber: "138",
        goingNumber: "85",
        likedBy: ['Nana Opoku', 'Justin Effiong']
    },
    {
        id: '3',
        eventImage: EventImg3,
        title: "Expat Networking Mixer: Connect, Collaborate, and Celebrate!",
        host: {
            name: "Akligo Kinglsey",
            avatar: HostImg1,
            friendCount: "256",
            postCount: "26"
        },
        content: "Calling all expats in the city! Join us for an evening of networking, collaboration, and celebration at our Expat Networking Mixer. Connect with fellow expats from around the world, exchange stories and experiences, and expand your professional and social networks. Whether you're new to the city or a long-time resident, this event is the perfect opportunity to meet like-minded individuals, forge new friendships, and discover exciting opportunities. Don't miss out on an evening filled with fun, laughter, and meaningful connections",
        location: "Victoria Island, Texas",
        date: "18th May, 2024",
        interestedNumber: "138",
        goingNumber: "85",
        likedBy: ['Nana Opoku', 'Justin Effiong']
        
    },
    {
        id: '4',
        eventImage: EventImg4,
        title: "Expat Networking Mixer: Connect, Collaborate, and Celebrate!",
        host: {
            name: "Akligo Kinglsey",
            avatar: HostImg1,
            friendCount: "256",
            postCount: "26"
        },
        content: "Calling all expats in the city! Join us for an evening of networking, collaboration, and celebration at our Expat Networking Mixer. Connect with fellow expats from around the world, exchange stories and experiences, and expand your professional and social networks. Whether you're new to the city or a long-time resident, this event is the perfect opportunity to meet like-minded individuals, forge new friendships, and discover exciting opportunities. Don't miss out on an evening filled with fun, laughter, and meaningful connections",
        location: "Victoria Island, Texas",
        date: "18th May, 2024",
        interestedNumber: "138",
        goingNumber: "85",
        likedBy: ['Nana Opoku', 'Justin Effiong']
    }
]