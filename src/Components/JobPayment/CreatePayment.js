import React from "react";
import { connect } from "react-redux";
import { createPayment } from "../../Store/Actions/PaymentAction";
import { Redirect } from "react-router-dom";

class CreatePayment extends React.Component {
  state = {
    payment: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const postId = this.props.match.params.id;
    const teacherId = this.props.location.search.split("d=");
    const postTitle = this.props.location.search.split(" ");
    this.props.createPayment(this.state, postId, postTitle[1], teacherId[1]);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Payment </h5>
          <div className="input-field">
            <label htmlFor="title">Payment</label>
            <input
              type="number"
              id="payment"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Send</button>
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
    createPayment: (payment, postId, postTitle, teacherId) =>
      dispatch(createPayment(payment, postId, postTitle, teacherId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePayment);
