import { CommunityItemProps } from '../interfaces/CommunitiesInterfaces';
import Location from '../../../assets/feed/communities/location.svg';
import Posts from '../../../assets/feed/members/posts.svg';
import AddCommunityButton from '../../../assets/feed/communities/add-community.svg';
import SettingsIcon from '../../../assets/manage-communities/comm-settings.svg';

const CommunityItem = ({ community, isManaged, onJoin, onSettings }: CommunityItemProps) => {
  if (!community) {
    return null; // or return a placeholder component
  }

  return (
    <div className="border border-gray-200 rounded-lg p-3 mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <img src={community.image} alt={community.name} className="w-10 h-10 rounded-full mr-3 flex-shrink-0" />
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate">{community.name}</div>
            <div className="flex items-center text-xs text-gray-500">
              <img src={Location} alt="Location" className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">{community.location}</span>
              <div className='w-0.5 h-4 bg-[#E4E4E4] mx-2 flex-shrink-0'></div>
              <img src={Posts} alt="Posts" className="w-4 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">{community.postsCount} Posts</span>
            </div>
          </div>
        </div>
        <button 
          className="focus:outline-none ml-2 flex-shrink-0"
          onClick={() => isManaged ? onSettings?.(community.id) : onJoin?.(community.id)}
        >
          <img 
            src={isManaged ? SettingsIcon : AddCommunityButton} 
            alt={isManaged ? "Settings" : "Join Community"} 
            className={isManaged ? "w-7 h-7" : "w-6 h-6"}
          />
        </button>
      </div>
      <div className="flex items-center mt-2">
        <div className="flex -space-x-2 overflow-hidden">
          {community.memberImages.slice(0, 5).map((img, index) => (
            <img key={index} src={img} alt="Member" className="inline-block h-6 w-6 rounded-full ring-2 ring-white" />
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-2 truncate">+{community.membersCount} Members</span>
      </div>
    </div>
  );
};

export default CommunityItem;