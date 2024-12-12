import NeedHelpIcon from '../../../assets/feed/forums/advice-icon.svg';
import TipsIcon from '../../../assets/feed/forums/tips-icon.svg';
import MeetupIcon from '../../../assets/feed/forums/meetup-icon.svg';
import GeneralInfoIcon from '../../../assets/feed/forums/general-info-icon.svg';
import { TagBadgeProps } from '../interfaces/TagBadgeInterfaces';

const TagIcon: Record<string, string> = {
  'Need Help/Advice': NeedHelpIcon,
  'Tips': TipsIcon,
  'Meetups/Events': MeetupIcon,
  'Announcement': GeneralInfoIcon,
};

const TagColor: Record<string, string> = {
  'Need Help/Advice': '#FBAF00',
  'Tips': '#6ACAD7',
  'Meetups/Events': '#D84461',
  'Announcement': '#1770B8',
};

const TagBadge = ({ tagName, className = '' }: TagBadgeProps) => {
  const tagColor = TagColor[tagName] || '#1770B8';
  const tagIcon = TagIcon[tagName] || GeneralInfoIcon;

  return (
    <span 
      className={`flex items-center px-2 py-1 rounded-full text-xs ${className}`}
      style={{ backgroundColor: `${tagColor}20`, color: tagColor }}
    >
      <img src={tagIcon} alt={tagName} className="w-4 h-4 mr-1" />
      {tagName}
    </span>
  );
};

export default TagBadge;