import LocationIcon from '../../../assets/feed/events/location-icon.svg';
import SalaryIcon from '../../../assets/feed/job-board/salary-icon.svg';
import { JobItemProps } from '../interfaces/JobBoardInterfaces';

const JobCard = ({ job }: JobItemProps) => (
    <div className="mb-4 last:mb-0 p-4 border border-gray-200 rounded-lg ">
      <div className="text-sm text-green-600 mb-1">{job.deadline}</div>
      <h3 className="font-bold">{job.title}</h3>
      <div className="flex items-center mt-2">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2">
          <img src={LocationIcon} alt="Location" className="w-4 h-4 mr-1" />
          <span className="text-xs text-gray-600">{job.location}</span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
          <img src={SalaryIcon} alt="Salary" className="w-4 h-4 mr-1" />
          <span className="text-xs text-gray-600">{job.salary}</span>
        </div>
      </div>
    </div>
);

export default JobCard;