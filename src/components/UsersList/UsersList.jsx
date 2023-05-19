import PropTypes from "prop-types";
import UserCard from "../UserCard/UserCard";
const UsersList = ({ title = null, users }) => (
  <>
    {title && (
      <h1 className=" text-center text-2xl font-semibold text-stone-800">
        {title}
      </h1>
    )}
    <ul
      className="gap-6 grid pt-6
                grid-cols-1
                lg:grid-cols-2 
                xl:grid-cols-3
  "
    >
      {users.map((user) => (
        <li
          key={user.id}
          //   className="rounded-md border border-black border-solid overflow-hidden
          // transition-all duration-300
          // hover:shadow-mm hover:shadow-sky-300 hover:scale-105 "
        >
          <UserCard userInfo={user} />
        </li>
      ))}
    </ul>
  </>
);

UsersList.prototype = {
  title: PropTypes.string,
  films: PropTypes.array.isRequired,
  location: PropTypes.shape,
};
export default UsersList;
