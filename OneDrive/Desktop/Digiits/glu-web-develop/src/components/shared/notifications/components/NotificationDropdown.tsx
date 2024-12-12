import { useRef, useEffect } from 'react';
import { mockNotifications } from '../../../../data/mockNotifications';
import { Notification } from '../interfaces/NotifcationInterfaces';
import { NotificationsDropdownProps } from '../interfaces/NotifcationInterfaces';
import NotificationItem from './NotificationItem';
import DoubleCheckIcon from '../../../../assets/icons/notifications-double-check.svg';

const NotificationsDropdown = ({ isOpen, onClose }: NotificationsDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const newNotifications = mockNotifications.slice(0, 2);
  const earlierNotifications = mockNotifications.slice(2);

  return (
    <div ref={dropdownRef} className="absolute right-10 mt-2 w-80 bg-white rounded-md shadow-lg z-10 max-h-[80vh] flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold mr-2">Notifications</h3>
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center -mt-3 -ml-1">
              <span className="text-white text-xs">5</span>
            </div>
          </div>
          <img src={DoubleCheckIcon} alt="Double Check" className="w-6 h-6" />
        </div>
      </div>
      <div className="overflow-y-auto flex-grow">
        <div className="p-4 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">NEW</h4>
            {newNotifications.map((notification: Notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">EARLIER</h4>
            {earlierNotifications.map((notification: Notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full py-2 text-center text-blue-500 bg-light-blue rounded-md">
          View All
        </button>
      </div>
    </div>
  );
};

export default NotificationsDropdown;