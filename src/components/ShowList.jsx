import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowList = ({ shows }) => {
  return (
    <div className="mx-8 my-4 ">
      <h2 className="text-3xl font-bold my-8 ml-3">List of Shows</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {shows.map((show) => (
          <li key={show.show.id} className="mb-8 overflow-hidden pb-4 rounded-xl bg-blue-100">
            <div className="relative">
              <img src={show.show.image?.medium} alt={show.show.name} className="w-full h-48 object-cover rounded-md" />
              <Link to={`/show/${show.show.id}`} className="absolute inset-0 flex items-center justify-center hover:bg-opacity-50 bg-black bg-opacity-0 transition duration-300">
                <span className="text-white text-lg font-semibold">View Details</span>
              </Link>
            </div>
            <div className="mt-4 ml-4">
              {show.show?.genres?.map((genre, i) => (
                <Genres key={i} genre={genre} />
              ))}
              
            </div>
            <Link to={`/show/${show.show.id}`} className="text-blue-700 mx-5 pb-4   font-semibold  hover:underline">
                {show.show.name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ShowList.propTypes = {
  shows: PropTypes.any.isRequired,
};
export default ShowList;

const Genres = ({ genre }) => {
  return (
    <div className="inline-block cursor-pointer  text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-full px-3 py-1 mr-2 mb-2">
      {genre}
    </div>
  );
};

Genres.propTypes = {
  genre: PropTypes.string.isRequired,
};
