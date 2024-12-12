import { MemberItemPropsWithButton } from '../interfaces/MembersInterfaces';
import Friends from '../../../../assets/feed/members/friends.svg';
import Crown from '../../../../assets/feed/members/crown.svg';
import Posts from '../../../../assets/feed/members/posts.svg';

const MemberItem = ({ image, name, friendsCount, postsCount, isVerified, onAdd, buttonImageSrc }: MemberItemPropsWithButton) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center flex-1">
      <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <div className="flex items-center">
          <span className="font-semibold text-sm">{name}</span>
          {isVerified && (
            <img src={Crown} alt="Verified" className="ml-1 w-4 h-4" />
          )}
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <img src={Friends} alt="Friends" className="w-3 h-3 mr-1" />
          <span>{friendsCount} Friends</span>
          <img src={Posts} alt="Posts" className="w-3 h-3 ml-2 mr-1" />
          <span>{postsCount} Posts</span>
        </div>
      </div>
    </div>
    <button
      onClick={() => onAdd(friendsCount)} // Using friendsCount as a placeholder for id
      className="focus:outline-none"
    >
      <img src={buttonImageSrc} alt="Add" className="w-6 h-6" />
    </button>
  </div>
);

export default MemberItem;