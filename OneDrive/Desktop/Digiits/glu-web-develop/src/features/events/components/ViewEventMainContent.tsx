import { EventItemProps } from '../interfaces/EventsInterfaces';
import CommentSection from '../../../features/comments/components/CommentSection';
import { mockComments } from '../../../data/mockComments';
import Comments from '../../../features/posts/components/PostComment';
import IntestedIcon from '../../../assets/feed/events/interested-icon-active.svg';
import GoingIcon from '../../../assets/feed/events/going-icon.svg';

const ViewEventMainContent = ({ event }: EventItemProps) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img src={event.eventImage} alt={event.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
          <p className="text-gray-700 mb-6">{event.content}</p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-600">
                <p className="text-base text-black font-semibold">{event.likedBy.join(', ')}</p>
                <p className="text-sm text-gray-500">&amp; 
                  {parseInt(event.interestedNumber) - event.likedBy.length} are interested
                </p>
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <img src={IntestedIcon} alt="Interested" className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">{event.interestedNumber} Interested</span>
              </div>
              <div className="flex items-center">
                <img src={GoingIcon} alt="Going" className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">{event.goingNumber} Going</span>
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <Comments />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <CommentSection comments={mockComments}/>
        </div>
      </div>
    </>
  );
};

export default ViewEventMainContent;