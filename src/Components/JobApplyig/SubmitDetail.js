import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";

const SubmitDetail = (props) => {
  const { post, auth, postId, applyPost } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (post) {
    return (
      <div className="container section apply-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{applyPost.postTitle}</span>
            <p>{applyPost.name}</p>
            <p>{applyPost.email}</p>
            <p>{applyPost.qualification}</p>
            <p>{applyPost.phone}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              {applyPost.name} is applied for {post.title}
            </div>
            <div>
              <p className="grey-text">
                {moment(post.createdAt.toDate().toString()).calendar()}
              </p>
            </div>
          </div>
          <div className="center">
            <Link to={`/${postId}/createSubmit?studentId=${post.authorId}`}>
              <button className="btn pink lighten-1 z-depth-0">Accept</button>
            </Link>
            <Link to={`/${postId}/createSubmit?studentId=${post.authorId}`}>
              <button className="btn pink lighten-1 z-depth-0">Reject</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Notification...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const applyPosts = state.firestore.data.applyPost;
  const applyPost = applyPosts ? applyPosts[id] : null;

  return {
    applyPost: applyPost,
    auth: state.firebase.auth,
    postId: id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "applyPost" }])
)(SubmitDetail);
