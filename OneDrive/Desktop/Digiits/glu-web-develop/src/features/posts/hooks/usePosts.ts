import { useEffect, useState } from "react";
import { Post } from "../interfaces/PostInterfaces";
import { mockPosts } from "../../../data/mockPosts";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setPosts(mockPosts);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch posts');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};