import React from "react";
import { connect } from "react-redux";
import { applyPosts } from "../../Store/Actions/PostApplyAction";
import { Redirect } from "react-router-dom";

class CreateSubmit extends React.Component {
  state = {
    email: "",
    phone: "",
    name: "",
    qualification: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const postId = this.props.match.params.id;
    const postTitle = this.props.location.search.split("e=");
    const stdId = this.props.location.search.split(" ");
    this.props.applyPosts(this.state, postId, stdId[1], postTitle[1]);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Apply for a Post </h5>
          <div className="input-field">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Email</label>
            <input
              type="text"
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Qualification</label>
            <input
              type="text"
              id="qualification"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Phone</label>
            <input
              type="number"
              id="phone"
              onChange={this.handleChange}
             
              required
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyPosts: (applyPost, postId, stdId, postTitle) =>
      dispatch(applyPosts(applyPost, postId, stdId, postTitle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubmit);
