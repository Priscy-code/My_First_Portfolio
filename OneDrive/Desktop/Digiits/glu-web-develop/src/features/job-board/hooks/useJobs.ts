import { useState, useEffect } from 'react';
import { JobBoard } from '../interfaces/JobBoardInterfaces';
import { mockJobs } from '../../../data/mockJobs';

export const useJobs = () => {
  const [jobs, setJobs] = useState<JobBoard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setJobs(mockJobs);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return { jobs, loading };
};