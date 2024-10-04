import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MusicSearch = () => {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);
    const [accessToken, setAccessToken] = useState('')
    

  const CLIENT_ID = '56578987902e469ea122cfa4b1';
  const REDIRECT_URI = 'http://localhost:5173';

   const AUTH_URL = `https://accounts.spotify.com/authorize?` +
        `response_type=token&` +
        `client_id=${CLIENT_ID}&` +
        `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
        `scope=user-read-private user-read-email`;



    const getAccessToken = () => {
        const hash = window.location.hash;
        const token = hash.split('&')[0].split('=')[1];
        if(token){
            setAccessToken(token);
            window.location.hash= '';
        }
    };

    useEffect(() => {
        getAccessToken();
    })

    const fetchMusicData = async () => {

        if(!accessToken) return;

        try{
            const response = await axios.get(`https://api.spotify.com/v1/search`,{

            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                q: query,
                type: 'track',
            },
            });

            setTracks (response.data.data)
        }
        catch(error){
            console.error("Error fetching data from Deezer API:", error)
        }
    };

    const handleSearch = () => {
        fetchMusicData();
    }

    const handleLogin = () => {
        window.location.href =AUTH_URL
    }

    return (
        <div>
        <h1>Music Search</h1>
        <input type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for Musci"/>

        <button onClick={handleLogin}>LOGIN to spotify </button>

        <div>
            {tracks.map(track => (
                <div key={track.id}>
                    <img src={track.album.cover_small} alt={track.title} />

                    <h3>{track.title}</h3>
                    <p>Artists(s): {track.artist.name}</p>
                    <p>Album:{track.album.title}</p>

                </div>
            ))}
        </div>
        </div>
    )
}

export default MusicSearch;