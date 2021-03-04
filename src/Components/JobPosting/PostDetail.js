import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";

const PostDetail = (props) => {
  const { post, auth, profile, postId } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (profile.roles === "Student" || profile.roles === "student") {
    if (post) {
      return (
        <div className="container section post-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>
                Posted by {post.authorFirstName} {post.authorLastName}
              </div>
              <div>
                <p className="grey-text">
                  {moment(post.createdAt.toDate().toString()).calendar()}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading post...</p>
        </div>
      );
    }
  }
  if (profile.roles === "Tutor" || profile.roles === "tutor") {
    if (post) {
      return (
        <div className="container section post-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>
                Posted by {post.authorFirstName} {post.authorLastName}
              </div>
              <div>
                <p className="grey-text">
                  {moment(post.createdAt.toDate().toString()).calendar()}
                </p>
              </div>
              <div className="center">
                <Link to={`/${postId}/submitDetail`}>
                  <button className="btn pink lighten-1 z-depth-0">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading post...</p>
        </div>
      );
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;

  return {
    post: post,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    postId: id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetail);
