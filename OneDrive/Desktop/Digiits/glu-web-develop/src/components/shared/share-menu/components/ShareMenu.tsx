import MailIcon from '../../../../assets/manage-communities/mail-icon.svg';
import FacebookIcon from '../../../../assets/manage-communities/facebook-icon.svg';
import TwitterIcon from '../../../../assets/manage-communities/twitter-icon.svg';
import InstagramIcon from '../../../../assets/manage-communities/instagram-icon.svg';
import LinkedInIcon from '../../../../assets/manage-communities/linkedin-icon.svg';
import LinkIcon from '../../../../assets/manage-communities/share-icon.svg';
import CommunityIcon from '../../../../assets/manage-communities/community-icon.svg';
import RightArrow from '../../../../assets/manage-communities/right-arrow.svg';
import FriendIcon from '../../../../assets/manage-communities/share-friend.svg';
import { ShareMenuProps } from '../interfaces/ShareMenuInterfaces';

const ShareMenu = ({ onShareOptionClick, showSendToFriend = false }: ShareMenuProps) => {
  const socialIcons = [
    { name: 'Email', icon: MailIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
  ];

  return (
    <div className="bg-white border rounded-md shadow-lg p-4 w-64">
      <div className="flex justify-between mb-4">
        {socialIcons.map((icon, index) => (
          <button key={index} className="p-2 rounded-full" onClick={() => onShareOptionClick(icon.name)}>
            <img src={icon.icon} alt={icon.name} className="w-8 h-8" />
          </button>
        ))}
      </div>
      <button className="flex items-center w-full p-2 rounded mb-2" onClick={() => onShareOptionClick('Copy Link')}>
        <img src={LinkIcon} alt="Copy Link" className="w-5 h-5 mr-2" />
        <span>Copy Link</span>
      </button>
      {showSendToFriend && (
        <button className="flex items-center justify-between w-full p-2 rounded mb-2" onClick={() => onShareOptionClick('Send to a Friend')}>
          <div className="flex items-center">
            <img src={FriendIcon} alt="Send to a Friend" className="w-5 h-5 mr-2" />
            <span>Send to a Friend</span>
          </div>
          <img src={RightArrow} alt="Right Arrow" className="w-3 h-3" />
        </button>
      )}
      <button className="flex items-center justify-between w-full p-2 rounded" onClick={() => onShareOptionClick('Share to Community')}>
        <div className="flex items-center">
          <img src={CommunityIcon} alt="Share to Community" className="w-5 h-5 mr-2" />
          <span>Share to Community</span>
        </div>
        <img src={RightArrow} alt="Right Arrow" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ShareMenu;