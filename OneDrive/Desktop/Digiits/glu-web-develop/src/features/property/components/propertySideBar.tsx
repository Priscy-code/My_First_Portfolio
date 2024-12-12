import { mockProperty } from '../../../data/mockProperty'
import LocationIcon from '../../../assets/feed/events/location-icon.svg'
import ExploreCommunitiesArrow from '../../../assets/feed/communities/explore-communities-arrow.svg';

const PropertySideBar = () => {
    function truncateText (text:string, maxLength: number): string {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border w-1/2 h-1/2">
      <h2 className="text-lg font-semibold mb-4">Recently Applied</h2>
      {mockProperty.slice(0, 4).map((property) => (
        <div className="flex border rounded-lg mb-2 gap-2">
          <img src={property.image} alt="" className="w-14 h-14 ml-3" />
          <div className="flex flex-col">
            <h2 className="text-xs font-semibold">
              {truncateText(property.bedroom, 24)}
            </h2>
            <p className="text-xs text-[#2B3660] font-semibold">
              {property.price} <span className="text-[#7D7E80]">per year</span>{" "}
            </p>
            <div className="flex items-center ">
              <img src={LocationIcon} alt="" className="w-3 h-3" />
              <p className="text-xs">{property.Location}</p>
            </div>
          </div>
        </div>
      ))}

      <div className='mt-6'>
        <hr />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Saved Properties</h2>
        <div className='mb-4'>
          {mockProperty.slice(0, 2).map((property) => (
            <div className="flex border rounded-lg mb-2 gap-2">
              <img src={property.image} alt="" className="w-14 h-14 ml-3" />
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold">
                  {truncateText(property.bedroom, 24)}
                </h2>
                <p className="text-xs text-[#2B3660] font-semibold">
                  {property.price}{" "}
                  <span className="text-[#7D7E80]">per year</span>{" "}
                </p>
                <div className="flex items-center ">
                  <img src={LocationIcon} alt="" className="w-3 h-3" />
                  <p className="text-xs">{property.Location}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-right mt-4">
            <a
              href="#"
              className="text-custom-blue text-sm flex items-center justify-end"
            >
              {" "}
              Show all
              <img
                src={ExploreCommunitiesArrow}
                alt="Arrow"
                className="ml-1 w-4 h-4"
              />
            </a>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default PropertySideBar
