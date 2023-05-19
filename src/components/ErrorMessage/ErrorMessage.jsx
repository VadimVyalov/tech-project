//import { useCallback } from 'react';
import PropTypes from "prop-types";
import { toast, Zoom } from "react-toastify";

const ErrorMessage = (msg, clb = false) => {
  const Msg = ({ closeToast, errorMessage }) => (
    <div>
      <p>Error: {errorMessage}</p>
      {/* //<p>Повідомлення закриється автоматично</p> */}
      <button
        onClick={closeToast}
        className="rounded-md border border-black border-solid px-2"
      >
        Поверненутися до пошуку
      </button>
    </div>
  );

  toast.error(<Msg errorMessage={msg} errorClose={clb} />, {
    closeButton: false,
    onClose: (props) => props.errorClose && props.errorClose(),
    autoClose: 5000,
    transition: Zoom,
    pauseOnFocusLoss: false,
    position: toast.POSITION.TOP_CENTER,
  });
};
export default ErrorMessage;

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
  clb: PropTypes.func,
};
