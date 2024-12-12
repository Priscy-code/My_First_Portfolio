import { JobBoard } from "../../../features/job-board/interfaces/JobBoardInterfaces";
import Modal from "./Modal";
import { IViewAppliedJobsModal } from "./interfaces/IModal";
import { useEffect, useState } from "react";
import DeadlineIcon from "../../../assets/icons/iconoir_calendar.svg";
import RemoteIcon from "../../../assets/feed/job-board/map-icon.svg";
import LocationIcon from "../../../assets/feed/events/location-icon.svg";
import TimeIcon from "../../../assets/feed/job-board/time-icon.svg";
import JoblevelIcon from "../../../assets/feed/job-board/junior-icon.svg";
import SalaryIcon from "../../../assets/feed/job-board/salary-icon.svg";
import IndustryIcon from "../../../assets/feed/job-board/tech-icon.svg";
import SavedIcon from "../../../assets/icons/saved-icon.svg";
import LineIcon from "../../../assets/icons/Line.svg";
import NarrowIcon from "../../../assets/icons/iconoir_nav-arrow-down.svg";
import { mockDiscussion } from "../../../data/mockDiscussion";
import Narrow from "../../../assets/icons/iconoir_more-vert.svg";
import ReplyIcon from '../../../assets/icons/reply-icon.svg'
import HeartIcon from '../../../assets/icons/iconoir_heart-solid.svg'
import DateIcon from '../../../assets/icons/iconoir_calendar-black.svg'
import UnlikedIcon from '../../../assets/icons/iconoir_heart.svg'
import Emoji from '../../../assets/icons/iconoir_emoji.svg'
import Attachment from '../../../assets/icons/iconoir_attachment.svg'
type Tab = "jobDetails" | "discussion";

const ViewJobDetails = ({
  isOpen,
  onClose,
  jobs,
  selectedJobId,
}: IViewAppliedJobsModal) => {
  console.log('id', selectedJobId)

  const [activeTab, setActiveTab] = useState<Tab>("jobDetails");
  const [selectedJob, setSelectedJob] = useState<JobBoard | null>(null);
  const [like, setLike] = useState(false)

  const toggleLike = () => {
    setLike((prevLiked) => !prevLiked)
  }

  useEffect(() => {
    console.log("Jobs:", jobs);
    const job = jobs.find((job) => job.id === selectedJobId) || null;
    console.log("selected Job:", job);
    setSelectedJob(job);
  }, [selectedJobId, jobs]);

  const handleTabChange = (tab: Tab): void => {
    setActiveTab(tab);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Job Details"
      horizontalLine
      icon={true}
      onAction={() => console.log("action")}
    >
      <div className="container mx-0 overflow-hidden">
        <div className="flex space-x-4 border-b-2 items-center ">
          <button
            onClick={() => handleTabChange("jobDetails")}
            className={`px-24 ${
              activeTab === "jobDetails"
                ? "border-b-4 border-custom-blue text-custom-blue font-bold"
                : "text-gray"
            }`}
          >
            Job Details
          </button>
          <button
            onClick={() => handleTabChange("discussion")}
            className={`px-28 ${
              activeTab === "discussion"
                ? "border-b-4 border-custom-blue text-custom-blue font-bold"
                : "text-gray-500"
            }`}
          >
            Discussion
          </button>
        </div>
     <div>
          {activeTab === "jobDetails" && selectedJob && (
            <div className="overflow-y-hidden">
              <div className="flex flex-col items-start ">
                <h2 className="font-semibold mt-3 ">{selectedJob.company}</h2>
                <div className="flex gap-2 mb-4">
                  <img src={DeadlineIcon} alt="" />
                  <p className="text-custom-red font-semibold">
                    {selectedJob.deadline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img
                      src={RemoteIcon}
                      alt="remote"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{selectedJob.workMode}</span>
                  </div>
                  <div className="flex item-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img
                      src={LocationIcon}
                      alt="Location"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img src={TimeIcon} alt="Time" className="w-5 h-5 mr-2" />
                    <span>{selectedJob.availablity}</span>
                  </div>
                  <div className="flex items-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img
                      src={JoblevelIcon}
                      alt="Job-level"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{selectedJob.jobLevel}</span>
                  </div>
                  <div className="flex items-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img
                      src={SalaryIcon}
                      alt="salary"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{selectedJob.salary}</span>
                  </div>
                  <div className="flex items-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img src={IndustryIcon} alt="industry" className="" />
                    <span>{selectedJob.industry}</span>
                  </div>
                  <div className="flex items-center bg-[#E4E4E4] text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <img src={TimeIcon} alt="time" className="w-5 h-5 mr-2" />
                    <span>{selectedJob.startTime}</span>
                  </div>
                </div>
              </div>
              <hr />
              <h2 className="flex items-start justify-start font-bold mt-3 mb-3">
                {selectedJob.title}
              </h2>
              <h3 className="font-bold flex items-start text-sm mb-3">
                Job Description
              </h3>
              <p className="flex items-start">Responsibilities</p>
              <div className="flex flex-col items-start">
                <ul className="list-disc pl-6 text-start">
                  {selectedJob.description.map((item, index) =>
                    item.trim() ? (
                      <li key={index} className="text-black">
                        {item.trim()}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-center gap-2">
                  <button className="bg-custom-red text-white rounded-xl p-2 mt- w-full">
                    Apply
                  </button>
                  <img src={LineIcon} alt="Line" className="" />

                  <button className="flex-shrink-0">
                    <img
                      src={SavedIcon}
                      alt=""
                      className=" flex items-center"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {activeTab === "discussion" && (
          <div>
            <div className="flex justify-between">
              <p className="text-[#7D7E80] mb-4 mt-4">All comment(126)</p>
              <div className="flex items-center gap-2">
                <p>Most Recent </p>
                <img src={NarrowIcon} alt="" />
              </div>
            </div>

            <div>
              {mockDiscussion.map((discuss) => (
                <div className="">
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-2">
                      <img src={discuss.profile} alt="" />
                      <div className="flex flex-col">
                        <h2 className="font-bold text-sm">{discuss.name}</h2>
                        <div className="flex gap-2">
                          <img
                            src={DateIcon}
                            alt=""
                            className="fill-[#7D7E80]"
                          />
                          <p className="text-[#7D7E80] text-xs">
                            {discuss.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-xs text-[#7D7E80]">{discuss.time}</p>
                      <button>
                        <img src={Narrow} alt="" />
                      </button>
                    </div>
                  </div>

                  <p className="text=[#060911 ">{discuss.comment}</p>
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      <button onClick={toggleLike}>
                        <img
                          src={like ? HeartIcon : UnlikedIcon}
                          alt={like ? "Liked" : "Unliked"}
                        />
                      </button>
                      <p>
                        {discuss.likes} {discuss.likeCount}
                      </p>
                    </div>
                    <div className="flex gap-2 ">
                      <img src={ReplyIcon} alt="" />
                      <p>Relpy</p>
                    </div>
                  </div>
                  <button className="mb-6 text-[#1770B8] underline text-sm font-semibold">
                    View Replies{" "}
                  </button>

                  <div className="pl-6 border-l-2 border-gray-300 mb-4">
                    {discuss.replies.map((reply) => (
                      <div key={reply.id}>
                        <div className="flex justify-between">
                          <div className="flex">
                            <img src={reply.profile} alt="profile" />
                            <div className="flex flex-col">
                              <h2 className="font-bold">{reply.name}</h2>
                              <div className="flex gap-2">
                                <img
                                  src={DateIcon}
                                  alt=""
                                  className="fill-[#7D7E80]"
                                />
                                <p className="text-xs text-[#7D7E80]">
                                  {reply.date}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <p className="text-xs font-semibold text-[#7D7E80]">
                              {reply.time}
                            </p>
                            <button>
                              <img src={Narrow} alt="" />
                            </button>
                          </div>
                        </div>

                        <p>{reply.comment}</p>
                        <div className="flex gap-2">
                          <button>
                            {" "}
                            <img
                              src={like ? HeartIcon : UnlikedIcon}
                              alt={like ? "Liked" : "Unliked"}
                            />
                          </button>
                          <p>
                            {reply.likes} {reply.likeCount}
                          </p>
                          <div className="flex gap-2 ">
                            <img src={ReplyIcon} alt="" />
                            <p>Relpy</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <footer>
                <div className="flex relative w-full items-center gap-4  ">
                  <input
                    type="text"
                    placeholder="comment"
                    className="w-full bg-[#F2F7FB] py-4 pl-4 rounded-xl text-xs"
                  />
                  <div className="absolute right-3 gap-4 ">
                    <button>
                      <img
                        src={Emoji}
                        alt=""
                        className="w-6 h-6 cursor-pointer"
                      />
                    </button>
                    <button>
                      <img
                        src={Attachment}
                        alt=""
                        className="w-6 h-6 cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
            </footer>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ViewJobDetails;
