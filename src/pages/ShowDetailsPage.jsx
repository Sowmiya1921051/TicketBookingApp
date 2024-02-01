import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowDetails from '../components/ShowDetails';
import { getShowById } from '../services/api';

const ShowDetailsPage = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const data = await getShowById(showId);
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  return (
    <div>
      {show ? (
        <>
          <ShowDetails show={show} />
        </>
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
};

export default ShowDetailsPage;
