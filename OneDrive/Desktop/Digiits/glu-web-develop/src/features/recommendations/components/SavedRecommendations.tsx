import { useState } from 'react';
import { SavedRecommendation } from '../interfaces/SavedRecommendationInterfaces';
import { mockSavedRecommendations } from '../../../data/mockSavedRecommendations';
import MapIcon from '../../../assets/feed/recommendations/location-icon.svg';

const SavedRecommendations = () => {
  const [savedRecommendations] = useState<SavedRecommendation[]>(mockSavedRecommendations);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Saved Recommendations</h2>
      <div className="space-y-4">
        {savedRecommendations.map((recommendation) => (
          <div key={recommendation.id} className="border-b pb-4 last:border-b-0">
            <h3 className="font-semibold">{recommendation.title}</h3>
            <p className="text-sm text-gray-600">{recommendation.description}</p>
            <div className="flex justify-between items-center mt-2 bg-light-blue p-2">
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{recommendation.location}</span>
                <span className="text-xs text-gray-500">{recommendation.address}</span>
              </div>
              <img src={MapIcon} alt="Map" className="w-10 h-10" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <button className="text-[#2B3660] font-semibold">View All →</button>
      </div>
      <hr className="my-2 border-t border-gray-200" />
    </div>
  );
};

export default SavedRecommendations;