import { useState } from "react";
import {IOpenFiltersModdal} from "./interfaces/IModal";
import Modal from "./Modal";
import LocationFilter from "../../../features/recommendations/components/LocationFilter";

export const OpenFiltersModal = ({ isOpen, onClose }: IOpenFiltersModdal) => {
  const [activeInput, setActiveInput] = useState<string | null>(null);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Filters"
      horizontalLine={true}
      leftContent={
        <div className="flex space-x-2">
          <button className="bg-[#2B3660] text-white py-2 px-4 rounded-3xl">
            Apply
          </button>
          <button className="bg-light-blue hover:bg-gray-300 text-custom-red py-2 px-4 rounded-3xl">
            Reset
          </button>
        </div>
      }
    >
      <div className="p-4">
        <LocationFilter
          activeInput={activeInput}
          setActiveInput={setActiveInput}
          showResetButton={false}
          showCurrentLocationButton={true}
        />
      </div>
    </Modal>
  );
};
