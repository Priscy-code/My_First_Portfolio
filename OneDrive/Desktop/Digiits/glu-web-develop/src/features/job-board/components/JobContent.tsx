import { useState } from "react";
import { JobBoardContentProps } from "../interfaces/JobBoardInterfaces";
import JobItem from "./JobItem";
import LocaationIcon from "../../../assets/feed/events/location-icon.svg";
import FilterIcon from "../../../assets/feed/forums/filter-list.svg";
import ViewAppliedJobsModal from "../../../components/layouts/modal/ViewAppliedJobsModal";
import ViewJobDetails from "../../../components/layouts/modal/ViewJobDetails";

const JobBoardContent = ({ jobs, loading }: JobBoardContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const handleDetailsModal = () => setDetailsModal(true)
  const handleCloseDetailModal = () => setDetailsModal(false);

  const handleJobClick = (id: string) => {
    setSelectedJobId(id);
    setDetailsModal(true);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form onClick={openModal}>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search job title..."
            className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="w-5 h-5 text-gray-500 absolute left-3 top-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <ViewAppliedJobsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          jobs={jobs}
        />
      </form>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="relative flex items-center">
          <img src={LocaationIcon} alt="Location" className="w-5 h-5 mr-2" />
          <span>All Locations</span>
        </div>
        {[
          "Date Posted",
          "Remote",
          "Full Time",
          "Industry",
          "Availability",
          "Salary Range",
        ].map((filter) => (
          <div key={filter} className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>{filter}</option>
            </select>
            <svg
              className="w-5 h-5 text-gray-500 absolute right-2 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        ))}
        <div className="relative flex items-center">
          <img src={FilterIcon} alt="Filter" className="w-5 h-5 mr-2" />
          <span>Job Level</span>
        </div>
      </div>
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filteredJobs.map((job) => (
            <button key={job.id} onClick={() => handleJobClick(job.id)}>
              <JobItem key={job.id} job={job} />
            </button>
          ))}
        </div>
      )}

      {selectedJobId && (
        <ViewJobDetails
          isOpen={detailsModal}
          onClose={handleCloseDetailModal}
          jobs={jobs}
          selectedJobId={selectedJobId}
        />
      )}
    </div>
  );
};

export default JobBoardContent;
