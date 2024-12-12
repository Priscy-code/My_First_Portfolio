import Navbar from '../shared/navbar/components/Navbar';
import JobBoardContent from '../../features/job-board/components/JobContent';
import JobBoardSidebar from '../../features/job-board/components/JobBoardSidebar';
import { useJobs } from '../../features/job-board/hooks/useJobs';
import BackButton from '../shared/back-button/BackButton';

const JobBoard = () => {
  const { jobs, loading } = useJobs();

  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10">
        <Navbar isLoggedIn={true}/>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <BackButton />
            <h1 className="text-3xl font-bold text-gray-900 ml-4">Job Board</h1>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md">
            Manage Jobs
          </button>
        </div>
        <div className="flex space-x-4 ">
          <div className="w-3/4">
            <JobBoardContent jobs={jobs} loading={loading} />
          </div>
          <div className="w-1/4 sticky top-20 self-start">
            <JobBoardSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;