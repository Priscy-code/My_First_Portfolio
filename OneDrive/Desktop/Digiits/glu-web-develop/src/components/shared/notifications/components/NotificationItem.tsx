import { NotificationItemProps } from '../interfaces/NotifcationInterfaces';

import LikeIcon from '../../../../assets/icons/notifications-likes.svg';
import TimeIcon from '../../../../assets/icons/notifications-timestamp.svg';
import SaveIcon from '../../../../assets/icons/notifications-saves.svg';
import PostIcon from '../../../../assets/icons/notifications-feed.svg';
import RecommendationIcon from '../../../../assets/icons/notifications-recommendation.svg';
import JobIcon from '../../../../assets/icons/notifications-job.svg';
import EventIcon from '../../../../assets/icons/notifications-events.svg';
import FriendRequestIcon from '../../../../assets/icons/notifications-friend-request.svg';

const NotificationItem = ({ notification }: NotificationItemProps) => {
  const { type, user, community, timestamp, likes, title, saves, interested, date, image } = notification;

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'likes':
        return <img src={LikeIcon} alt="Likes" className="w-3 h-3 mr-1" />;
      case 'time':
        return <img src={TimeIcon} alt="Time" className="w-3 h-3 mr-1" />;
      case 'saves':
        return <img src={SaveIcon} alt="Saves" className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  const renderTypeIcon = () => {
    switch (type) {
      case 'post':
        return <img src={PostIcon} alt="Post" className="w-4 h-4 ml-2" />;
      case 'recommendation':
        return <img src={RecommendationIcon} alt="Recommendation" className="w-4 h-4 ml-2" />;
      case 'job':
        return <img src={JobIcon} alt="Job" className="w-4 h-4 ml-2" />;
      case 'event':
        return <img src={EventIcon} alt="Event" className="w-4 h-4 ml-2" />;
      case 'friendRequest':
        return <img src={FriendRequestIcon} alt="Friend Request" className="w-4 h-4 ml-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center p-3 hover:bg-gray-100">
      <img src={image} alt={user || title} className="w-10 h-10 rounded-full mr-3" />
      <div className="flex-1">
        {type === 'post' && (
          <div>
            <p className="text-sm">
              New post from <strong>{user}</strong> in {community}
            </p>
            <div className="flex items-center mt-1">
              {renderIcon('likes')}
              <p className="text-xs text-gray-500 mr-2">{likes} Likes</p>
              {renderIcon('time')}
              <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
          </div>
        )}
        {type === 'recommendation' && (
          <div>
            <p className="text-sm">
              New recommendation from <strong>{user}</strong> in {community}
            </p>
            <div className="flex items-center mt-1">
              {renderIcon('likes')}
              <p className="text-xs text-gray-500 mr-2">{likes} Likes</p>
              {renderIcon('time')}
              <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
          </div>
        )}
        {type === 'job' && (
          <div>
            <p className="text-sm">
              New job listing (<strong>{title.length > 15 ? `${title.slice(0, 20)}...` : title}</strong>)
            </p>
            <div className="flex items-center mt-1">
              {renderIcon('saves')}
              <p className="text-xs text-gray-500 mr-2">{saves} Saves</p>
              {renderIcon('time')}
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        )}
        {type === 'event' && (
          <div>
            <p className="text-sm">
              New Event posted in <strong>{title}...</strong>
            </p>
            <div className="flex items-center mt-1">
              {renderIcon('saves')}
              <p className="text-xs text-gray-500 mr-2">{interested} Interested</p>
              {renderIcon('time')}
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        )}
        {type === 'friendRequest' && (
          <div>
            <p className="text-sm">
              New Friend Request from <strong>{user}...</strong>
            </p>
            <div className="flex items-center mt-1">
              {renderIcon('time')}
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        )}
      </div>
      {renderTypeIcon()}
    </div>
  );
};

export default NotificationItem;