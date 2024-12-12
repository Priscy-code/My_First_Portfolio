export interface Notification {
  id: number;
  type: 'post' | 'recommendation' | 'job' | 'event' | 'friendRequest';
  user?: string;
  community?: string;
  timestamp?: string;
  likes?: number;
  saves?: number;
  title: string;
  interested?: string;
  date?: string;
  image: string;
}

export interface NotificationItemProps {
  notification: Notification;
}

export interface NotificationsDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}