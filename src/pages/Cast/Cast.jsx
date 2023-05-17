import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../../tools/apiGet";
import Loader from "../../components/Loader/Loader";

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  const url = `/movie/${id}/credits`;
  const { data, isLoaded } = useFetch(url);

  useEffect(() => {
    if (data !== null) {
      setCast(data.cast);
    }
  }, [data]);

  return isLoaded ? (
    <Loader />
  ) : cast?.length ? (
    <>
      <h2 className="text-xl font-semibold my-2">Cast</h2>
      <ul
        className="grid gap-3 
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5 
                xl:grid-cols-6"
      >
        {cast.map((e) => (
          <li
            key={e.id}
            className="flex flex-col gap-2 p-2 border border-solid border-stone-800
           rounded-md"
          >
            <img
              className="w-full"
              src={
                e.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${e.profile_path}`
                  : `https://via.placeholder.com/185x280/cccccc/db0404.jpg?text=No+image`
              }
              width={185}
              height={280}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://via.placeholder.com/185x280/cccccc/db0404.jpg?text=No+image";
              }}
              alt={`Poster: ${e.name}`}
            />
            <p className="text-lg font-semibold">{e.original_name}</p>
            <p className="text-base font-medium ">
              Pharacter:
              <span className="text-lg font-semibold italic">
                {" "}
                {e.character}{" "}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p className="text-lg font-semibold">немаэ інформації</p>
  );
};
export default Cast;
