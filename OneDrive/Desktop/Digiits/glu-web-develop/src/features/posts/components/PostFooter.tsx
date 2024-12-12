import { Post } from '../interfaces/PostInterfaces';
import LikeIcon from '../../../assets/feed/icons/like-icon.svg';
import CommentIcon from '../../../assets/feed/icons/comment-icon.svg';
import ShareIcon from '../../../assets/feed/icons/share-icon.svg';
import PostComment from './PostComment';

const PostFooter = ({ likes, comments, shares, likedBy, likedByCount }: Pick<Post, 'likes' | 'comments' | 'shares' | 'likedBy' | 'likedByCount'>) => {
  return (
    <div className="flex flex-col text-gray-500 text-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-700">
          <span className="font-semibold">{likedBy}</span>
          <p> & {likedByCount} others like this</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1">
            <img src={LikeIcon} alt="Like" className="w-5 h-5" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-1">
            <img src={CommentIcon} alt="Comment" className="w-5 h-5" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-1">
            <img src={ShareIcon} alt="Share" className="w-5 h-5" />
            <span>{shares}</span>
          </button>
        </div>
      </div>
      <PostComment/>
    </div>
  );
};

export default PostFooter;