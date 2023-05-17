import PropTypes from 'prop-types';
const MovieCard = ({ movieInfo }) => (
  <div className="grid sm:grid-cols-2 gap-4 my-4">
    <img
      className="flex flex-1"
      src={
        movieInfo.backdrop_path
          ? `https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`
          : `https://via.placeholder.com/500x280/cccccc/db0404.jpg?text=No+image`
      }
      width={500}
      height={280}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src =
          'https://via.placeholder.com/500x280/cccccc/db0404.jpg?text=No+image';
      }}
      alt={`Poster: ${movieInfo.title}`}
    />
    <div className="flex-1 flex flex-col gap-2">
      <h2 className="text-xl font-medium text-stone-900">{`${
        movieInfo.original_title
      } (${movieInfo.release_date.slice(0, 4)})`}</h2>
      <p>User score: {movieInfo.vote_average}</p>
      <h3 className="text-base font-medium text-stone-800">Overview</h3>
      <p className="text-sm italic font-medium text-stone-600">
        {movieInfo.overview}
      </p>
      <h3 className="text-base font-medium text-stone-800">Genres</h3>
      <p>{movieInfo.genres.map(e => e.name).join(' | ')}</p>
    </div>
  </div>
);

MovieCard.prototype = {
  movieInfo: PropTypes.shape,
};

export default MovieCard;
