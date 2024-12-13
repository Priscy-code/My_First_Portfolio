import Navbar from '../shared/navbar/components/Navbar'
import BackButton from '../shared/back-button/BackButton'

const ManageProperty = () => {
  return (
    <div>
      <div>
        <Navbar isLoggedIn={true} />
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mb-3">
        <div className="flex justify-between items-center mb-4">
          <div className="flex ">
            <BackButton />
            <h1>Manage Properties</h1>
          </div>
          <button className="bg-custom-red text-white py-2 px-4 rounded-md">
            Creat New
          </button>
        </div>
        <hr />

        
      </div>
    </div>
  );
}

export default ManageProperty
