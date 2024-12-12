import Modal from '../../../components/layouts/modal/Modal';
import PostHeader from '../../../features/posts/components/PostHeader';
import PostContent from '../../../features/posts/components/PostContent';
import PostFooter from '../../../features/posts/components/PostFooter';
import { mockComments } from '../../../data/mockComments';
import CommentSection from '../../../features/comments/components/CommentSection';
import { IViewPostModal } from './interfaces/IModal';
import ReportIcon from '../../../assets/feed/icons/report-icon.svg';

const ViewPostModal = ({ isOpen, onClose, post }: IViewPostModal) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="View Post" 
      horizontalLine={false}
      leftContent={
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <img src={ReportIcon} alt="Report" className="w-4 h-4 mr-1" />
          Report
        </button>
      }
    >
      <div className="p-4">
        <PostHeader user={post.user} timestamp={post.timestamp} location={post.location} onViewPost={() => {}} />
        <PostContent content={post.content} media={post.media} />
        <PostFooter likes={post.likes} comments={post.comments} shares={post.shares} likedBy={post.likedBy} likedByCount={post.likedByCount} />
        <CommentSection comments={mockComments} />
      </div>
    </Modal>
  );
};

export default ViewPostModal;