import  { useState, useEffect } from 'react';
import ShowList from '../components/ShowList';
import { getShows } from '../services/api';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getShows('all');
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <ShowList shows={shows} />
    </div>
  );
};

export default Home;
