import moment from "moment";
import { connect } from "react-redux";

const ProjectSummary = (props) => {
  const { stdId, post, profile } = props;
  if (profile.roles === "Student" || profile.roles === "student") {
    if (post.authorId === stdId.uid) {
      return (
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{post.title}</span>
            <p>
              Posted By : {post.authorFirstName} {post.authorLastName}{" "}
            </p>
            <p className="grey-text">
              {moment(post.createdAt.toDate().toString()).calendar()}{" "}
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  if (profile.roles === "Tutor" || profile.roles === "tutor") {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{post.title}</span>
          <p>
            Posted By : {post.authorFirstName} {post.authorLastName}{" "}
          </p>
          <p className="grey-text">
            {moment(post.createdAt.toDate().toString()).calendar()}{" "}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    stdId: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(ProjectSummary);
