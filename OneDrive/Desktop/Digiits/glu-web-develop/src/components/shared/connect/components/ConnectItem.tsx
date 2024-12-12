import { MemberItemProps } from '../../members/interfaces/MembersInterfaces';
import Friends from '../../../../assets/feed/members/friends.svg';
import AddButton from '../../../../assets/feed/members/add-button.svg';
import Crown from '../../../../assets/feed/members/crown.svg';
import Posts from '../../../../assets/feed/members/posts.svg';

const ConnectItem = ({ image, name, friendsCount, postsCount, isVerified, onAdd }: MemberItemProps) => (
  <div className="flex items-center justify-between p-3 rounded-lg shadow-md hover:bg-[#2B3660] hover:text-white transition-colors duration-300">
    <div className="flex items-center flex-1 min-w-0">
      <img src={image} alt={name} className="w-10 h-10 rounded-full mr-2 flex-shrink-0" />
      <div className="min-w-0">
        <div className="flex items-center">
          <span className="font-semibold text-sm truncate">{name}</span>
          {isVerified && (
            <img src={Crown} alt="Verified" className="ml-1 w-4 h-4 flex-shrink-0" />
          )}
        </div>
        <div className="flex items-center text-xs">
          <img src={Friends} alt="Friends" className="w-3 h-3 mr-1 flex-shrink-0" />
          <span className="truncate">{friendsCount} Friends</span>
          <img src={Posts} alt="Posts" className="w-3 h-3 ml-2 mr-1 flex-shrink-0" />
          <span className="truncate">{postsCount} Posts</span>
        </div>
      </div>
    </div>
    <button
      onClick={() => onAdd(friendsCount)}
      className="focus:outline-none ml-2 flex-shrink-0"
    >
      <img src={AddButton} alt="Add" className="w-5 h-5 md:w-4 md:h-4" />
    </button>
  </div>
);

export default ConnectItem;