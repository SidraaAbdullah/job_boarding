import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";

const SubmitDetail = (props) => {
  const { auth, postId, applyPost, studentId } = props;
  return !auth.uid ? (
    <Redirect to="/signin" />
  ) : (
    <div className="container section apply-details">
      {applyPost ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {applyPost.name} is applied for {applyPost.postTitle}
            </span>
            <p>Name : {applyPost.name}</p>
            <p>Email : {applyPost.email}</p>
            <p>Qualification : {applyPost.qualification}</p>
            <p>PhoneNo : {applyPost.phone}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              <p className="grey-text">
                {moment(applyPost.createdAt.toDate().toString()).calendar()}
              </p>
            </div>
          </div>
          <div className="center ">
            <Link
              to={`/accept/${postId} ?studentPostTitle= ${applyPost.postTitle} ?teacherId=${applyPost.teacherId}`}
            >
              <button className="btn pink lighten-1 z-depth-0 mr-5">
                Accept
              </button>
            </Link>
            <Link to="">
              <button className="btn pink lighten-1 z-depth-0 ml-5">
                Reject
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container center">
          <p>Loading Notification...</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const applyPosts = state.firestore.data.applyPost;
  const applyPost = applyPosts ? applyPosts[id] : null;

  return {
    applyPost: applyPost,
    auth: state.firebase.auth,
    postId: id,
    studentId: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "applyPost" }])
)(SubmitDetail);
