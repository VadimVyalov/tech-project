import PropTypes from "prop-types";

import { useSetFollowersMutation } from "../../redux/usersApi";
//import { setFollowing } from "../../redux/usersSlice";
const imgUrl = new URL("../../assets/following.png", import.meta.url).href;

const UserCard = ({ userInfo }) => {
  const [setFollowers] = useSetFollowersMutation();

  const handleFoloow = (id) => {
    //dispatch(setFollowing(id));

    setFollowers({
      id,
      followers: userInfo.followers - userInfo.following * 2 + 1,
    });
    // .unwrap()
    // .then((d) => console.log("data", d))
    // .catch((e) => console.log("error", e));
  };

  return (
    <div
      className="  w-[380px] h-[460px] rounded-[20px] shadow-[-3px_7px_21px_rgba(0,0,0,0.23)]
  bg-gradient-to-br from-[#471CA9] from-0% via-[#5736A3] via-55% to-[#4B2A99] to-80% "
    >
      <div
        style={{ "--image-url": `url(${imgUrl})` }}
        className="  w-full h-full bg-[image:var(--image-url)] rounded-[20px] flex  items-center flex-col justify-end"
      >
        <img
          className="w-[64px] h-64[px] mb-8 rounded-full"
          src={
            userInfo.avatar
              ? userInfo.avatar
              : `https://via.placeholder.com/80x80/cccccc/db0404.jpg?text=NA`
          }
          width={500}
          height={280}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://via.placeholder.com/80х80/cccccc/db0404.jpg?text=NA";
          }}
          alt={`Poster: ${userInfo.name}`}
        />
        <h2 className="mb-4 font-['MontserratMedium'] font-medium uppercase text-xl/[24px] text-[#EBD8FF]">{`tweets ${userInfo.tweets} `}</h2>
        <h2 className="mb-7 font-['MontserratMedium'] font-medium uppercase text-xl/[24px] text-[#EBD8FF]">{`followers ${userInfo.followers
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `}</h2>

        <button
          onClick={() => handleFoloow(userInfo.id)}
          style={{
            "--isFolloving": userInfo.following ? "#5CD3A8" : "#EBD8FF",
          }}
          className="mb-9  w-[196px] h-[50px] bg-[var(--isFolloving)] 
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]
      shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          {userInfo.following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

UserCard.prototype = {
  userInfo: PropTypes.shape,
};

export default UserCard;
