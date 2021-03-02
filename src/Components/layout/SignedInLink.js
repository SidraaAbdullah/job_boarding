import { NavLink } from "react-router-dom";
import { signOut } from "../../Store/Actions/AuthAction";
import { connect } from "react-redux";

const SignedInLink = (props) => {
  const { profile } = props;
  return (
    <ul className="right ">
      <li>
        <NavLink to="/create">New Post</NavLink>{" "}
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>{" "}
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>{" "}
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLink);

