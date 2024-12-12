import { useState, useEffect } from 'react';
import { Recommendation } from '../interfaces/RecommendationInterfaces';
import { mockRecommendations } from '../../../data/mockRecommendations';

export const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 1000);
  }, []);

  return { recommendations, loading, error };
};