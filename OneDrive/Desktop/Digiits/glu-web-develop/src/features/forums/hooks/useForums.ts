import { useState, useEffect } from 'react';
import { Forum } from '../interfaces/ForumsInterfaces';
import { mockForums } from '../../../data/mockForums';

export const useForums = () => {
  const [forums, setForums] = useState<Forum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForums = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setForums(mockForums);
      setLoading(false);
    };

    fetchForums();
  }, []);

  return { forums, loading };
};