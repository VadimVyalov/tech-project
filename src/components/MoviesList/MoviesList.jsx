import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const MoviesList = ({ title = null, films, location }) => (
  <>
    {title && (
      <h1 className=" text-center text-2xl font-semibold text-stone-800">
        {title}
      </h1>
    )}
    <ul
      className="gap-6 grid pt-6
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 
                xl:grid-cols-5
  "
    >
      {films.map(e => (
        <li
          key={e.id}
          className="rounded-md border border-black border-solid overflow-hidden
        transition-all duration-300 
        hover:shadow-mm hover:shadow-sky-300 hover:scale-105 "
        >
          <NavLink
            className="p-0 "
            to={`/Movies/${e.id}`}
            state={{ from: location }}
          >
            <img
              className="w-full p-0"
              src={
                e.poster_path
                  ? `https://image.tmdb.org/t/p/w185/${e.poster_path}`
                  : `https://via.placeholder.com/185x280/cccccc/db0404.jpg?text=No+image`
              }
              width={185}
              height={280}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  'https://via.placeholder.com/185x280/cccccc/db0404.jpg?text=No+image';
              }}
              alt={`Poster: ${e.title}`}
            />
            <p className="mx-2 font-sans text-sm font-medium truncate ...">
              {e.original_title}
            </p>
          </NavLink>
        </li>
      ))}
    </ul>
  </>
);

MoviesList.prototype = {
  title: PropTypes.string,
  films: PropTypes.array.isRequired,
  location: PropTypes.shape,
};
export default MoviesList;
