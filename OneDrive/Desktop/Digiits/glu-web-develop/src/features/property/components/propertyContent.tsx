import { useState } from "react"
import LocationIcon from "../../../assets/feed/events/location-icon.svg"
import NarrowDown from "../../../assets/icons/iconoir_nav-arrow-down.svg"
import LineIcon from "../../../assets/icons/Line.svg"
import Vector from "../../../assets/icons/vectorIcon.svg"
import { PropertyContentProps } from "../interface/propert"
import PropertyItem from "./propertyItem"

const PropertyContent = ({loading, properties}: PropertyContentProps) => {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredProperty = properties.filter((property) => property.bedroom.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search listing title"
          className=" w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="w-5 h-5 text-gray-500 left-3 top-3 absolute"
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
      <hr />
      <div className="flex flex-wrap justify-between mt-4 gap-4 mb-6">
        <div className="flex gap-4">
          <div className="flex ">
            <img src={LocationIcon} alt="" className="w-5 h-5 mr-2" />
            <span className="text-sm">All Location</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">Availability</span>
            <button className="">
              <img src={NarrowDown} alt="" />
            </button>
          </div>
          <img src={LineIcon} alt="" />
          <img src={Vector} alt="" />
          <div className="flex items-center gap-1">
            <span className="text-sm">Listing Type</span>
            <button className="">
              <img src={NarrowDown} alt="" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">Property Type</span>
            <button>
              <img src={NarrowDown} alt="" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">Price Range</span>
            <button>
              <img src={NarrowDown} alt="" />
            </button>
          </div>
        </div>
        <div className="flex gap-1">
          <img src={Vector} alt="" />
          <span className="text-sm">All Filters</span>
        </div>
      </div>
        {loading ? (
          <p>Loading property...</p>
        ) : (
          <div className="gap-4 grid grid-cols-2">
            {filteredProperty.map((properties) => (
              <PropertyItem key={properties.id} propertyList={properties} />
            ))}
          </div>
        )}
    </div>
  );
}

export default PropertyContent
