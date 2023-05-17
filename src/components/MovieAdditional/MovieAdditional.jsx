import PropTypes from "prop-types";
import { ButtonLink } from "../SharedLayout/SharedLayout";
import { BsCast } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";

const MovieAdditional = ({ link, state }) => {
  return (
    <div>
      <h2 className="text-base font-medium text-stone-800">
        Additional information
      </h2>

      <div className="flex gap-3 my-4">
        <ButtonLink link={() => link("cast", { state })}>
          <BsCast />
          Cast
        </ButtonLink>

        <ButtonLink link={() => link("reviews", { state })}>
          <MdOutlineReviews />
          Reviews
        </ButtonLink>
      </div>
    </div>
  );
};

MovieAdditional.prototype = {
  link: PropTypes.func.isRequired,
  state: PropTypes.shape,
};
export default MovieAdditional;
