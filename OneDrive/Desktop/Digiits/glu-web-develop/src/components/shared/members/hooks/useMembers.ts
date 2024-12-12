import { useState, useEffect } from 'react';
import { Member } from '../interfaces/MembersInterfaces';
import { mockMembers } from '../../../../data/mockMembers';

export const useMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMembers(mockMembers);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch members');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const addMember = (memberId: number) => {
    // Add members logic goes here
    console.log(`Add member with ID: ${memberId}`);
  };

  const showAllMembers = () => {
    // Show all members logic goes here
    console.log('Show all members');
  };

  return { members, loading, error, addMember, showAllMembers };
};