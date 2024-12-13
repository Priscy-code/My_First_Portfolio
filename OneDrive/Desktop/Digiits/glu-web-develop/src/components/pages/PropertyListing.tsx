import PropertyContent from "../../features/property/components/propertyContent";
import BackButton from "../shared/back-button/BackButton"
import { useProperties } from "../../features/property/hooks/useProperties";
import Navbar from "../shared/navbar/components/Navbar";
import PropertySideBar from "../../features/property/components/propertySideBar";
import { useNavigate } from "react-router-dom";

const PropertyListing = () => {
  const { properties, loading} = useProperties();
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/manage-property')
  }
  return (
    <div className="h-screen ">
      <div className="sticky top-0 z-10">
        <Navbar isLoggedIn={true} />
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <BackButton />
            <h1 className="text-3xl font-bold text-gray-900 ml-4">
              Property Listings
            </h1>
          </div>
          <button onClick={handleNavigate} className="bg-red-600 text-white px-4 py-2 rounded-md">
            Manage Properties
          </button>
        </div>
        <hr />
        <div className="mt-6 flex gap-6">
          <PropertyContent loading={loading} properties={properties} />
          <PropertySideBar />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="w-40 bg-custom-red text-white p-2 rounded-lg text-sm">Load More</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyListing
