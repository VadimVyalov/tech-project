import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/Loader/Loader";
import Searchbar from "../../components/Searchbar/Searchbar";
import UsersList from "../../components/UsersList/UsersList";
//import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useGetUsersQuery } from "../../redux/usersApi";
import { useSelector } from "react-redux";
import { selectCurrentUsers } from "../../redux/selectors";

const Tweets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.pathname.from ?? "/";
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetUsersQuery(page);
  const users = useSelector(selectCurrentUsers);

  //const [searchString, setSearchString] = useSearchParams("");

  const [loadMore, setLoadMore] = useState(true);

  const showList = !isLoading && !isError;
  const showLoader = isLoading && !isError;

  useEffect(() => {
    if (data?.length < 3) {
      setLoadMore(false);
    }
  }, [data]);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const inputString = evt.currentTarget.elements.query;
    const inputValue = evt.currentTarget.elements.query.value.trim();
    if (!inputValue) {
      toast.error(`Введи `);
      return;
      // } else if (options.query === inputValue) {
      //   toast.error(`Вже шукали "${inputValue}" `);
      //   inputString.value = "";
      //   return;
    }

    // setSearchString({ query: inputValue });
    // setOptions((prev) => ({ ...prev, query: inputValue }));
    inputString.value = "";
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <button
        onClick={() => navigate(backLinkHref)}
        className="bg-sky-200 px-3 mb-4 rounded-md flex items-center gap-2
                    border border-stone-400 border-solid 
                  hover:bg-sky-400 hover:shadow hover:shadow-sky-500"
      >
        <TbArrowBackUp />
        Back to home
      </button>
      {showLoader && <Loader />}
      {showList && (
        <UsersList title={"У трендах"} users={users} location={location} />
      )}
      {loadMore && (
        <button
          onClick={() => setPage(page + 1)}
          className="mb-9  w-[196px] h-[50px] bg-[#EBD8FF] 
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]
      shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Tweets;
