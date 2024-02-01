import { useEffect, useState } from 'react';
import { getUserDetails, clearUserDetails } from '../utils/localStorage';

const BookedTicketsPage = () => {
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    // Retrieve booked tickets from local storage
    const userTickets = getUserDetails();
    if (userTickets) {
      setBookedTickets(userTickets); // Set the array directly
    }
  }, []);

  const handleDelete = (index) => {
    const updatedTickets = [...bookedTickets];
    updatedTickets.splice(index, 1); // Remove the ticket at the specified index
    setBookedTickets(updatedTickets);
    clearUserDetails(); // Update local storage
  };

  return (
    <div className="mx-8 my-8">
      <h1 className="text-3xl font-bold mb-4">Booked Tickets</h1>
      {bookedTickets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookedTickets.map((ticket, index) => (
            <div key={index} className="border p-4 rounded-md bg-white text-black shadow-md relative">
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-semibold mb-2">{ticket.showName}</h2>
              <img
                src={ticket.image}
                alt={ticket.showName}
                className="mb-4 object-cover h-40 w-full rounded-md"
              />
              <p>{`Booked by: ${ticket.userName}`}</p>
              <p>{`Email: ${ticket.userEmail}`}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No booked tickets yet.</p>
      )}
    </div>
  );
};

export default BookedTicketsPage;
