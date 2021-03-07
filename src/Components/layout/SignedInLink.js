import { NavLink, Redirect } from "react-router-dom";
import { signOut } from "../../Store/Actions/AuthAction";
import { connect } from "react-redux";

const SignedInLink = (props) => {
  const { profile } = props;
  if (profile.roles === "Student" || profile.roles === "student") {
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
  }
  if (profile.roles === "Tutor" || profile.roles === "tutor") {
    return (
      <ul className="right ">
        <li>
          <a onClick={props.signOut}>Log Out</a>{" "}
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLink);
