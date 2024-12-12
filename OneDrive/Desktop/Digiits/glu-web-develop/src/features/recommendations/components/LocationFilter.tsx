import { useState } from 'react';
import FormInput from '../../../components/layouts/FormInput';
import Checked from '../../../assets/checked.svg';
import Unchecked from '../../../assets/unchecked.svg';
import LocationIcon from '../../../assets/feed/recommendations/filter-list.svg';
import CurrentLocationIcon from '../../../assets/feed/recommendations/current-location-icon.svg';
import { LocationFilterProps } from '../interfaces/LocationFilterInterfaces';

const LocationFilter = ({ activeInput, setActiveInput, showResetButton = true, showCurrentLocationButton = false}: LocationFilterProps) => {
  const [selectedOption, setSelectedOption] = useState<'near' | 'specify'>('near');
  const [fromConnections, setFromConnections] = useState(false);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleReset = () => {
    setFromConnections(false);
    setCity('');
    setState('');
    setCountry('');
    setActiveInput(null);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img src={LocationIcon} alt="" className="w-5 h-5 rounded-full mr-3" />
        <h3 className="text-lg font-semibold">Location</h3>
      </div>
      <div className="space-y-2">
        <div
          className="flex items-center cursor-pointer bg-light-blue border-2 border-[#2B3660] rounded-md p-2"
          onClick={() => setSelectedOption('near')}
        >
          <img src={selectedOption === 'near' ? Checked : Unchecked} alt="" className="w-5 h-5 mr-2" />
          <span>Locations Near Me</span>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setSelectedOption('specify')}
        >
          <img src={selectedOption === 'specify' ? Checked : Unchecked} alt="" className="w-5 h-5 mr-2" />
          <span>Or Specify Location</span>

          {showCurrentLocationButton && (
            <button className="ml-56 flex items-center text-blue-600">
              <img src={CurrentLocationIcon} alt="Current Location" className="w-5 h-5 mr-2" />
              Use Current Location
            </button>
          )}
        </div>
      </div>
      {selectedOption === 'specify' && (
        <div className="mt-4 space-y-2">
          <FormInput
            label="City/Town/Province"
            active={activeInput === 'city'}
            isFontNormal
          >
            <input
              type="text"
              className="w-full p-2 outline-none"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onFocus={() => setActiveInput('city')}
              onBlur={() => setActiveInput(null)}
            />
          </FormInput>
          <FormInput
            label="State/Region"
            active={activeInput === 'state'}
            isFontNormal
          >
            <input
              type="text"
              className="w-full p-2 outline-none"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              onFocus={() => setActiveInput('state')}
              onBlur={() => setActiveInput(null)}
            />
          </FormInput>
          <FormInput
            label="Country"
            active={activeInput === 'country'}
            isFontNormal
          >
            <input
              type="text"
              className="w-full p-2 outline-none"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onFocus={() => setActiveInput('country')}
              onBlur={() => setActiveInput(null)}
            />
          </FormInput>
        </div>
      )}
      <div className="mt-4">
        <div className="flex items-center mb-4">
          <img src={LocationIcon} alt="" className="w-5 h-5 rounded-full mr-3" />
          <h3 className="text-lg font-semibold">Other</h3>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setFromConnections(!fromConnections)}
        >
          <img src={fromConnections ? Checked : Unchecked} alt="" className="w-5 h-5 mr-2" />
          <span>From Connections</span>
        </div>
        {showResetButton && (
          <div className="mt-10 flex justify-end">
            <button
              className="bg-light-bluee hover:bg-gray-300 text-custom-red py-2 px-4 rounded-3xl"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;
