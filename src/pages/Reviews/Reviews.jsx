import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../../tools/apiGet";
import Loader from "../../components/Loader/Loader";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  const url = `/movie/${id}/reviews`;
  const { data, isLoaded } = useFetch(url);

  useEffect(() => {
    if (data !== null) {
      setReviews(data.results);
      //    console.log(data.results);
    }
  }, [data]);

  return isLoaded ? (
    <Loader />
  ) : reviews?.length ? (
    <>
      <h2 className="text-xl font-semibold my-2">Reviews</h2>
      <ul className="flex flex-col gap-3 ">
        {reviews.map((e) => (
          <li
            key={e.id}
            className="flex flex-col gap-2 p-2 border border-solid border-stone-800
           rounded-md"
          >
            <h3 className="text-lg font-semibold">{e.author}</h3>
            <img
              src={
                e.author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w185/${e.author_details.avatar_path}`
                  : `https://via.placeholder.com/185x100/cccccc/db0404.jpg?text=No+image`
              }
              width={185}
              height={185}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://via.placeholder.com/185x100/cccccc/db0404.jpg?text=No+image";
              }}
              alt={`Poster: ${e.author_details.name}`}
            />
            <p className="text-sm italic font-medium text-stone-600">
              {e.content}
            </p>
            <p>{e.created_at.slice(0, 10)}</p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p className="text-lg font-semibold">немаэ відгуків</p>
  );
};

export default Reviews;
