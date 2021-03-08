import moment from "moment";
import { connect } from "react-redux";

const PaymentSummary = (props) => {
  const { payment, teachId } = props;
  if (payment.teacherId === teachId.uid) {
    return (
      <li key={payment.id}>
        <span className="">
          {payment.studentFirstName} {payment.studentLastName} is paid for{" "}
          {payment.postTitle}
        </span>
        <div>
          <p className="grey-text pb-3">
            {moment(payment.createdAt.toDate().toString()).calendar()}
          </p>
        </div>
      </li>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    teachId: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(PaymentSummary);
