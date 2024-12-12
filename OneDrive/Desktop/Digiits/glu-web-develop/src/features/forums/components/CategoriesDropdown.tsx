import GeneralInfoIcon from '../../../assets/feed/forums/gen-info.svg';
import AnnouncementIcon from '../../../assets/feed/forums/ann-icon.svg';
import HelpIcon from '../../../assets/feed/forums/help-icon.svg';
import MeetupsIcon from '../../../assets/feed/forums/meetups-events-icon.svg';
import TipsIcon from '../../../assets/feed/forums/tips-icon2.svg';
import JobsIcon from '../../../assets/feed/forums/jobs-icon2.svg';
import WarningsIcon from '../../../assets/feed/forums/warnings-icon.svg';
import OthersIcon from '../../../assets/feed/forums/others2-icon.svg';
import { CategoriesDropdownProps } from '../interfaces/CategoriesInterfaces';

const categories = [
  { name: 'General Info', icon: GeneralInfoIcon },
  { name: 'Announcement', icon: AnnouncementIcon },
  { name: 'Need Help/Advice', icon: HelpIcon },
  { name: 'Meetups/Events', icon: MeetupsIcon },
  { name: 'Tips', icon: TipsIcon },
  { name: 'Jobs/Housing', icon: JobsIcon },
  { name: 'Warnings', icon: WarningsIcon },
  { name: 'Others', icon: OthersIcon },
];

const CategoriesDropdown = ({ isOpen, onClose }: CategoriesDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-custom-blue ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className="block px-4 py-2 text-sm text-custom-blue hover:bg-light-bluee flex items-center"
            role="menuitem"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <img 
              src={category.icon} 
              alt={category.name} 
              className="w-4 h-4 mr-2 filter-custom-blue" 
            />
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDropdown;