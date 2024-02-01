import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800  opacity-75"></div>
      <div className="bg-black rounded-lg px-12 py-8 z-20">
        <button onClick={onClose} className="absolute top-2 right-2 font-bold hover:bg-red-700 bg-red-500 rounded px-3 py-1  text-white/80 hover:text-white ">
          Close X 
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
