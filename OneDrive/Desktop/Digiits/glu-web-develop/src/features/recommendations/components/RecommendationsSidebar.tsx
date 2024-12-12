import { useState } from 'react';
import LocationFilter from './LocationFilter';
import SavedRecommendations from './SavedRecommendations';

const RecommendationsSidebar = () => {
  const [activeInput, setActiveInput] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <LocationFilter activeInput={activeInput} setActiveInput={setActiveInput} />
      <hr className="my-2 mx-4 border-t border-gray-200" />
      <SavedRecommendations />
    </div>
  );
};

export default RecommendationsSidebar;