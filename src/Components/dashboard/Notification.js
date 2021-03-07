import SubmitLists from "../JobApplyig/SubmitLists";
import { connect } from "react-redux";

const Notification = (props) => {
  const { applyPosts, profile } = props;
  if (profile.roles === "Student" || profile.roles === "student") {
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title center">Notification</span>
            <SubmitLists applyPosts={applyPosts} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Notification);
