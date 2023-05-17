import PropTypes from 'prop-types';
import { BiMoviePlay } from 'react-icons/bi';
const Searchbar = ({ onSubmit }) => (
  <div
    className="flex items-center justify-center px-6 py-3 text-white 
              bg-sky-600 z-50 shadow-md "
  >
    <form
      onSubmit={onSubmit}
      className="flex items-center w-full max-w-xl 
                  overflow-hidden bg-white rounded"
    >
      <button
        type="submit"
        className="inline-block w-12 h-12 bg-inherit text-sky-500 
                  opacity-60 transition-opacity duration-300 hover:opacity-100"
      >
        <BiMoviePlay className="block h-full w-full" />
      </button>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        className="inline-block w-full px-1 outline-none 
                    font-sans font-normal text-xl text-black 
                    placeholder:text-lg"
      />
    </form>
  </div>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
