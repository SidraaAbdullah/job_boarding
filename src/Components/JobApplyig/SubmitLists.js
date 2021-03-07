import { Link } from "react-router-dom";
import SubmitSummary from "../JobApplyig/SubmitSummary";

const SubmitLists = (props) => {
  const { applyPosts } = props;
  return (
    <ul className="notification">
      {applyPosts &&
        applyPosts.map((applyPost) => {
          return (
            <Link to={`/applyPost/${applyPost.id}`}>
              <SubmitSummary applyPost={applyPost} />
            </Link>
          );
        })}
    </ul>
  );
};

export default SubmitLists;
