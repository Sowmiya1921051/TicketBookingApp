import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import TicketBookingForm from './TicketBookingForm';

const ShowDetails = ({ show }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    name,
    image: { medium },
    summary,
    genres,
    status,
    premiered,
    schedule,
    rating,
    network,
    officialSite,
  } = show;

  return (
    <div className="mx-9 my-4">
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <div className="flex justify-between mb-4">
        <img src={medium} alt={name} className="w-1/3 rounded-md" />
        <div className="w-2/3 ml-4">
          <div className="mb-2">
            <strong>Status:</strong> {status}
          </div>
          <div className="mb-2">
            <strong>Genres:</strong> {genres.join(', ')}
          </div>
          <div className="mb-2">
            <strong>Premiered:</strong> {premiered}
          </div>
          <div className="mb-2">
            <strong>Schedule:</strong> {schedule.time} on {schedule.days.join(', ')}
          </div>
          <div className="mb-2">
            <strong>Rating:</strong> {rating.average}
          </div>
          <div className="mb-2">
            <strong>Network:</strong> {network.name}
          </div>
          <div className="mb-2">
            <strong>Official Site:</strong> <a href={officialSite} target="_blank" rel="noopener noreferrer">{officialSite}</a>
          </div>
        </div>
      </div>
      <div className="mb-4">{summary}</div>
      <button onClick={openModal} className="bg-blue-500 text-white py-2 px-4 mt-4 mb-6 inline-block">
        Book Tickets
      </button>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TicketBookingForm show={show} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

ShowDetails.propTypes = {
  show: PropTypes.any.isRequired,
};

export default ShowDetails;
