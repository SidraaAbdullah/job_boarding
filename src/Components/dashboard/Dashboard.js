import React from "react";
import PostLists from "../JobPosting/PostLists";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Notification from "./Notification";

class Dashboard extends React.Component {
  render() {
    const { posts, auth, applyPosts, payments } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostLists posts={posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification applyPosts={applyPosts} payments={payments} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    applyPosts: state.firestore.ordered.applyPost,
    payments: state.firestore.ordered.payments,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts" },
    { collection: "applyPost", limit: 6 },
    { collection: "payments", limit: 6 },
  ])
)(Dashboard);
