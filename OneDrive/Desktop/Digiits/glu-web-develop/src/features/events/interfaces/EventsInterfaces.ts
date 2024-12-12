import { Member } from '../../../components/shared/members/interfaces/MembersInterfaces';

export interface Event {
    id: string;
    eventImage: string;
    title: string;
    host: {
      name: string;
      avatar: string;
      friendCount: string;
      postCount: string;
    };
    content: string;
    location: string;
    date: string;
    interestedNumber: string;
    goingNumber: string;
    likedBy: string[];
  }
  
  export interface EventItemProps {
    event: Event;
  }
  
  export interface EventContentProps {
    events: Event[];
    loading: boolean;
  }
  
  export interface NewEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateEvent: (event: Omit<Event, 'id'>) => void;
  }

  
export interface EventStatusDropdownProps {
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  orientation?: 'up' | 'down';
}

export interface NewEvent {
  title: string;
  description: string;
  isInPerson: boolean;
  location: string;
  startDate: string;
  startTime: string;
  endDate?: string;
  repeatFrequency: string;
  coHosts: Member[];
  images: string[];
}