import { mockProperty } from "@/data/mockProperty";
import { PropertyContentProps } from "../interface/propert";


const MangePropertiesItem = ({loading, properties}:PropertyContentProps) => {
    const filteredProperty = properties.filter((property) => property.bedroom.toLowerCase)
  return (
    <div>
      <div className="flex flex-col">
        <h2>Added Properties</h2>
        <p>Manage properties post on the platform </p>
      </div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search listing title..."
          className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
        />

        <svg
          className="w-5 h-5 text-gray-500 absolute left-3"
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
      <div>
        
      </div>
    </div>
  );
}

export default MangePropertiesItem
