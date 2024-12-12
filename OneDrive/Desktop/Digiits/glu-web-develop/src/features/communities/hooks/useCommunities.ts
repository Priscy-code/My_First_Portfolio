import { useState, useEffect } from 'react';
import { Community } from '../interfaces/CommunitiesInterfaces';
import { mockCommunities } from '../../../data/mockCommunities';


export const useCommunities = () => {
    const [communities, setCommunities] = useState<Community[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCommunities = async () => {
            try{
                await new Promise(resolve => setTimeout(resolve, 1000));
                setCommunities(mockCommunities);
                setLoading(false);
            }
            catch(err){
                setError('Failed to fetch communities');
                setLoading(false);
            }
        };
        fetchCommunities();

    }, []);

    const joinCommunity = (communityId: number) => {
        // joinCommunity logic goes here
        console.log(`Joining community with id: ${communityId}`);
    };

    return { communities, loading, error, joinCommunity };

}