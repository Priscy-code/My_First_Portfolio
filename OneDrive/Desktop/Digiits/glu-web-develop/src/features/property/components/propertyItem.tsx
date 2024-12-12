import { PropertyProp } from "../interface/propert"
import Location from '../../../assets/feed/events/location-icon.svg'
import RentIcon from '../../../assets/property/rent-icon.svg'
import FlatIcon from '../../../assets/property/flat-icon.svg'
import BedroomIcon from '../../../assets/property/bedroom-icon.svg'
import BathroomIcon from '../../../assets/property/bathroom-icon.svg'
import KitchenIcon from '../../../assets/property/kitchen-icon.svg'

const PropertyItem = ({propertyList}: PropertyProp) => {
  return (
    <div className="mb-4 last:mb-0 p-4 border border-gray-200 rounded-lg ">
      <div className="mb-2">
        <h3 className="font-semibold mb-2">{propertyList.bedroom}</h3>
        <div className="flex gap-4">
          <img src={propertyList.image} alt="property" className="object-cover rounded-md w-44 h-44" />
          <div className="flex flex-col">
            <h1 className="text-custom-red">{propertyList.price}</h1>
            <p className="text-xs text-[#7D7E80]">per year</p>
            <div className="flex">
              <img src={Location} alt="" />
              <p>{propertyList.Location}</p>
            </div>
            <p>{propertyList.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex bg-[#E4E4E4] rounded-full w-20 gap-2 ">
            <img src={RentIcon} alt="" className="ml-3" />
            <span>Rent</span>
          </div>
          <div className="flex bg-[#E4E4E4] rounded-full w-16 gap-1">
            <img src={FlatIcon} alt="" className="ml-3" />
            <span>Flat</span>
          </div>
          <div className="flex bg-[#E4E4E4] rounded-full ">
            <img src={BedroomIcon} alt="" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex bg-[#E4E4E4] rounded-full ">
            <img src={BathroomIcon} alt="" />
            <span>1 Bathroom</span>
          </div>
          <div className="flex bg-[#E4E4E4] rounded-full ">
            <img src={KitchenIcon} alt="" />
            <span>1 Kitchen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyItem
