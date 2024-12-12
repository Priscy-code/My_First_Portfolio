import { JobItemProps } from '../interfaces/JobBoardInterfaces';
import DateIcon from '../../../assets/feed/events/date-icon.svg';
import CommentIcon from '../../../assets/feed/recommendations/comment-icon.svg';
import BookMarkIcon from '../../../assets/feed/job-board/bookmark-inactive.svg';
import LikeIcon from '../../../assets/feed/job-board/like-icon.svg';
import DislikeIcon from '../../../assets/feed/job-board/dislike-icon.svg';
import ShareIcon from '../../../assets/feed/forums/share-icon.svg';
import RemoteIcon from '../../../assets/feed/job-board/map-icon.svg';
import LocationIcon from '../../../assets/feed/events/location-icon.svg';
import TimeIcon from '../../../assets/feed/job-board/time-icon.svg';
import JoblevelIcon from '../../../assets/feed/job-board/junior-icon.svg';
import SalaryIcon from '../../../assets/feed/job-board/salary-icon.svg';
import IndustryIcon from '../../../assets/feed/job-board/tech-icon.svg';

const JobItem = ({ job }: JobItemProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full ">
        <div className="mb-2">
          <p className="font-bold text-black">{job.company}</p>
          <div className="flex items-center mt-1">
            <img src={DateIcon} alt="Date" className="w-5 h-5 mr-2" />
            <span className="text-sm text-gray-500">{job.deadline}</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {job.title.split(' ').slice(0, 7).join(' ') + (job.title.split(' ').length > 7 ? '...' : '')}
        </h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          {job.description.slice(0, 2).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
          {job.description.length > 3 && <li>...</li>}
        </ul>
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={RemoteIcon} alt="Remote" className="w-5 h-5 mr-2" />
            <span>{job.workMode}</span>
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={LocationIcon} alt="Location" className="w-5 h-5 mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={TimeIcon} alt="Availability" className="w-5 h-5 mr-2" />
            <span>{job.availablity}</span>
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={JoblevelIcon} alt="Job Level" className="w-5 h-5 mr-2" />
            <span>{job.jobLevel}</span>
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={SalaryIcon} alt="Salary" className="w-5 h-5 mr-2" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={IndustryIcon} alt="Industry" className="w-5 h-5 mr-2" />
            <span>{job.industry}</span>
          </div>
          <div className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            <img src={TimeIcon} alt="Start Time" className="w-5 h-5 mr-2" />
            <span>{job.startTime}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="text-gray-600 flex items-center">
              <img src={LikeIcon} alt="Like" className="w-5 h-5 mr-1" />
              {job.likes}
            </button>
            <button className="text-gray-600 flex items-center">
              <img src={DislikeIcon} alt="Dislike" className="w-5 h-5 mr-1" />
              {job.dislikes}
            </button>
            <button className="text-gray-600 flex items-center">
              <img src={CommentIcon} alt="Comment" className="w-5 h-5 mr-1" />
              {job.comments}
            </button>
            <button className="text-gray-600 flex items-center">
              <img src={BookMarkIcon} alt="Bookmark" className="w-5 h-5 mr-1" />
              {job.bookmarks}
            </button>
          </div>
          <button className="text-gray-600 hover:text-gray-800 flex items-center">
            <img src={ShareIcon} alt="Share" className="w-5 h-5 mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default JobItem;
  