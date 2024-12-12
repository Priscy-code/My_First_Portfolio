import { useState } from 'react';
import RecommendationItem from './RecommendationItem';
import { useRecommendations } from '../hooks/useRecommendations';
import { RecommendationsContentProps } from '../interfaces/RecommendationContentInterfaces';
import FilterIcon from '../../../assets/feed/recommendations/filter-list.svg';
import { OpenFiltersModal } from '../../../components/layouts/modal/ViewFilterModal';

const RecommendationsContent = ({ isMobileOrTablet }: RecommendationsContentProps) => {
  const { recommendations, loading, error } = useRecommendations();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) return <div className="text-center">Loading recommendations...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <div className={`flex ${isMobileOrTablet ? 'flex-col' : 'flex-row'} justify-between items-center mb-4`}>
        <input 
          type="text" 
          placeholder="Search..." 
          className={`p-2 border rounded ${isMobileOrTablet ? 'w-full mb-2' : 'w-64 mr-2'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={`flex items-center ${isMobileOrTablet ? 'w-full justify-between' : ''}`}>
          {isMobileOrTablet && (
            <button 
              className="p-2 mr-2"
              onClick = {openModal}
            >
              <img src={FilterIcon} alt="Filter" className="w-6 h-6" />
            </button>
          )}
          <select className={`p-2 border rounded ${isMobileOrTablet ? 'flex-grow' : ''}`}>
            <option>Most Recent</option>
          </select>
        </div>
      </div>
      <div className="space-y-6">
        {recommendations
          .filter(rec => rec.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((recommendation) => (
            <RecommendationItem key={recommendation.id} {...recommendation} />
          ))}
      </div>

      <OpenFiltersModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default RecommendationsContent;