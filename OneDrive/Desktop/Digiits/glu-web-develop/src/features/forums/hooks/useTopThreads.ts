import { useState, useEffect } from 'react';
import { TopThread } from '../interfaces/ForumsInterfaces';
import { mockTopThreads } from '../../../data/mockForumsSidebar';

export const useTopThreads = () => {
  const [topThreads, setTopThreads] = useState<TopThread[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopThreads = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTopThreads(mockTopThreads);
      setLoading(false);
    };

    fetchTopThreads();
  }, []);

  return { topThreads, loading };
};