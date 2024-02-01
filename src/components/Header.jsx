import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-black p-4">
      <div className="w-[96%] mx-auto flex items-center justify-between">
        <Link to="/" className="text-white  text-xl font-bold ">
        Movie Reserve
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white/90 font-[500] hover:text-white mr-8 tracking-wide">
            All Movies
          </Link>
          <Link to="/booked-tickets" className="text-white/90 hover:text-white  tracking-wide mr-4">
            Booked Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
