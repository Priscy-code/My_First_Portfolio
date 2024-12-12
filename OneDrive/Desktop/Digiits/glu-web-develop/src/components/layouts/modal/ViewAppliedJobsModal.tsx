import { useState } from 'react';
import Modal from '../../../components/layouts/modal/Modal';
import { IViewAppliedJobsModal } from '../../../components/layouts/modal/interfaces/IModal';
import DateIcon from '../../../assets/feed/events/date-icon.svg';
import SearchIcon from '../../../assets/feed/forums/search-icon.svg';
import BookMarkIconActive from '../../../assets/feed/recommendations/bookmark-icon.svg';
import RemoteIcon from '../../../assets/feed/job-board/map-icon.svg';
import LocationIcon from '../../../assets/feed/events/location-icon.svg';
import TimeIcon from '../../../assets/feed/job-board/time-icon.svg';
import JoblevelIcon from '../../../assets/feed/job-board/junior-icon.svg';
import SalaryIcon from '../../../assets/feed/job-board/salary-icon.svg';
import IndustryIcon from '../../../assets/feed/job-board/tech-icon.svg';

const ViewAppliedJobsModal = ({ isOpen, onClose, jobs }: IViewAppliedJobsModal) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Applied Jobs" Searchbar={
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
      </div>
    }>
      <div className="px-2">
        <p className="text-gray-600 mb-4">You have applied to {jobs.length} jobs</p>
        {filteredJobs.map(job => (
          <div key={job.id} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-black">{job.company}</p>
              <img src={BookMarkIconActive} alt="Bookmark" className="w-5 h-5" />
            </div>
            <div className="flex items-center mb-2">
              <img src={DateIcon} alt="Date" className="w-5 h-5 mr-2" />
              <span className="text-sm text-gray-500">{job.deadline}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
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
                <div className='flex  items center'>
                    <img src={DateIcon} alt="Date" className="w-5 h-5 mr-2" />
                    <p className="text-sm text-gray-500">Applied: {job.appliedDate}</p>
                </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ViewAppliedJobsModal;