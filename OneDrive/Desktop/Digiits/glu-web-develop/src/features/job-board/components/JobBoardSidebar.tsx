import JobCard from './JobCard';
import { mockJobs } from '../../../data/mockJobs';
import ExploreCommunitiesArrow from '../../../assets/feed/communities/explore-communities-arrow.svg';

const JobBoardSidebar = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Recently Applied</h2>
      {mockJobs.slice(0, 2).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <div className="text-right mt-2">
        <a href="#" className="text-[#2B3660] text-sm flex items-center justify-end">
          View Applied Jobs
          <img src={ExploreCommunitiesArrow} alt="Arrow" className="ml-1 w-4 h-4" />
        </a>
      </div>
      
      <h2 className="text-lg font-semibold mt-8 mb-4">Saved Jobs</h2>
      {mockJobs.slice(0, 2).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <div className="text-right mt-2">
        <a href="#" className="text-custom-blue text-sm flex items-center justify-end">
          Show All
          <img src={ExploreCommunitiesArrow} alt="Arrow" className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default JobBoardSidebar;