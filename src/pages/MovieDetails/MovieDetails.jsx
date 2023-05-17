import { useParams, useLocation, Outlet, useNavigate } from "react-router-dom";
import { Suspense, useEffect, useState, useCallback } from "react";
import { useFetch } from "../../tools/apiGet";
import Loader from "../../components/Loader/Loader";

import { TbArrowBackUp } from "react-icons/tb";
import MovieCard from "../../components/MovieCard/MovieCard";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieAdditional from "../../components/MovieAdditional/MovieAdditional";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const navigate = useNavigate();
  const url = `/movie/${id}`;
  const { data, isLoaded, error } = useFetch(url);

  const backToPrev = useCallback(
    () => navigate(backLinkHref),
    [backLinkHref, navigate]
  );

  useEffect(() => {
    if (data !== null) {
      setMovieInfo(data);
    }
    if (error) {
      ErrorMessage(error, backToPrev);
    }
  }, [error, data, backToPrev]);

  const showDetail = movieInfo && !error;
  const showLoader = isLoaded && !error;

  return (
    <>
      {showLoader && <Loader />}
      {showDetail && (
        <>
          <button
            onClick={() => navigate(backLinkHref)}
            className="bg-sky-200 px-3 mb-4 rounded-md flex items-center gap-2
                    border border-stone-400 border-solid 
                  hover:bg-sky-400 hover:shadow hover:shadow-sky-500"
          >
            <TbArrowBackUp />
            Back to list
          </button>

          <MovieCard movieInfo={movieInfo} />

          <MovieAdditional link={navigate} state={location.state} />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
