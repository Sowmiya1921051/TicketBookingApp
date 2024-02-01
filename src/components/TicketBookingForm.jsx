import { useState } from 'react';
import PropTypes from 'prop-types';
import { setUserDetails, getUserDetails } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const TicketBookingForm = ({ show, onClose }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();

  const handleBooking = () => {
    console.log(show)
    if (userName && userEmail) {
      const bookedTickets = getUserDetails() || []; 
      const newTicket = { userName, userEmail, showName: show.name, showId: show.id ,image : show.image.original};
      const updatedTickets = [...bookedTickets, newTicket];
      setUserDetails(updatedTickets);
      onClose();
      navigate("/booked-tickets");
    }
    onClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ticket Booking for {show.name}</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-white">Your Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border tracking-wide bg-white/85 px-4 text-black rounded-lg mt-1 border-gray-300 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-white">Your Email:</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="border tracking-wide bg-white/85 px-4 text-black rounded-lg mt-1 mb-4 border-gray-300 py-2 w-full"
          />
        </div>
        <div className='flex items-center justify-end'>
          <button
            type="button"
            onClick={onClose}
            className="border-blue-500 hover:bg-blue-500 mr-3 border-2 text-white rounded-lg py-1.5 px-4 inline-block"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleBooking}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2  rounded-lg  px-4 inline-block"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

TicketBookingForm.propTypes = {
  show: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TicketBookingForm;
