import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../../../../assets/feed/members/search-icon.svg';
import ServiceIcon from '../../../../assets/feed/icons/services-suitcase.svg';
import ServiceLocation from '../../../../assets/feed/icons/services-location.svg';
import ServiceBookmark from '../../../../assets/feed/icons/services-bookmark.svg';
import ServiceSalary from '../../../../assets/feed/icons/services-salary.svg';
import ForwardButton from '../../forward-button/ForwardButton';

const ServicesDropdown = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef} className="absolute z-10 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="p-4">
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Find Jobs" 
            className="w-full px-10 pr-10 py-2 border rounded" 
          />
          <img 
            src={SearchIcon} 
            alt="Search" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
          />
          <ForwardButton />
        </div>
      
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-10">
            {[
              { title: "No/Low Code Developer", location: "Lekki", salary: "300K - 650K", saved: "8.2K" },
              { title: "DevOps Engineer", location: "Ikeja", salary: "800K - 1.2M", saved: "124K" },
              { title: "Frontend Developer", location: "Yaba", salary: "450K - 850K", saved: "589" },
              { title: "Creative Design", location: "Victoria Island", salary: "300K - 650K", saved: "1.2K" }
            ].map((job, index) => (
              <Link key={index} to="#" className="text-left">
                <div className="flex flex-col">
                  <div className="flex items-center mb-1">
                    <img src={ServiceIcon} alt="Job" className="w-5 h-5 mr-2" />
                    <h4 className="text-sm font-light truncate">{job.title}</h4>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <img src={ServiceLocation} alt="Location" className="w-3 h-3 mr-1" />
                    <span className="mr-2 truncate">{job.location}</span>
                    <img src={ServiceSalary} alt="Salary" className="w-3 h-3 mr-1" />
                    <span className="mr-2">{job.salary}</span>
                    <img src={ServiceBookmark} alt="Saved" className="w-3 h-3 mr-1" />
                    <span>{job.saved}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link to="#" className="w-full py-2 mt-4 text-center text-white bg-red-600 rounded-md block">
          Job Board
        </Link>
      </div>
    </div>
  );
};

export default ServicesDropdown;