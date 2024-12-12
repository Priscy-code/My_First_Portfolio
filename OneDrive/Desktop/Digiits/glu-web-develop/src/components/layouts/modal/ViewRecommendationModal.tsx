import Modal from './Modal';
import RecommendationItem from '../../../features/recommendations/components/RecommendationItem';
import PostComment from '../../../features/posts/components/PostComment';
import { IViewRecommendationModal } from './interfaces/IModal';
import ReportIcon from '../../../assets/feed/recommendations/report-icon.svg';
import OpenMapIcon from '../../../assets/feed/recommendations/open-map-icon.svg';

const ViewRecommendationModal = ({ isOpen, onClose, recommendation }: IViewRecommendationModal) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="View Recommendation" 
      horizontalLine
      leftContent={
        <div className="flex items-center space-x-4">
          <img src={ReportIcon} alt="Report" className="w-10 h-10" />
          <button className="flex items-center bg-[#2B3660] text-white px-3 py-1 rounded-3xl">
            <img src={OpenMapIcon} alt="Open Map" className="w-4 h-4 mr-1" />
            Open In Map
          </button>
        </div>
      }
    >
      <div className="mb-6">
        <RecommendationItem {...recommendation} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">All Comments</h3>
        <select className="p-2 border rounded">
          <option>Most Recent</option>
        </select>
      </div>
      <div className="border-t border-gray-200 pt-2">
        <p className="text-gray-500">Be the first to post a comment</p>
      </div>
      <PostComment />
    </Modal>
  );
};

export default ViewRecommendationModal;
