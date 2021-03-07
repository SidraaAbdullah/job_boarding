import moment from "moment";
import { connect } from "react-redux";

const SubmitSummary = (props) => {
  const { applyPost, stdId } = props;
  if (applyPost.studentId === stdId.uid) {
    return (
      <li key={applyPost.id}>
        <span className="">
          {applyPost.name} is applied for {applyPost.postTitle}
        </span>
        <div>
          <p className="grey-text pb-3">
            {moment(applyPost.createdAt.toDate().toString()).calendar()}
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
    stdId: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(SubmitSummary);
