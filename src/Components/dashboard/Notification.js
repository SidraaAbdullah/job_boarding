import SubmitLists from "../JobApplyig/SubmitLists";
import { connect } from "react-redux";
import PaymentLists from "../JobPayment/PaymentLists";

const Notification = (props) => {
  const { applyPosts, profile, payments } = props;
  return (
    <div className="section">
      {profile.roles === "Student" || profile.roles === "student" ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title center">Notification</span>
            <SubmitLists applyPosts={applyPosts} />
          </div>
        </div>
      ) : profile.roles === "Tutor" || profile.roles === "tutor" ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title center">Notification</span>
            <PaymentLists payments={payments} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Notification);
