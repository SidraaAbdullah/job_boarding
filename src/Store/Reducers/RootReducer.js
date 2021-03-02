import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import PostReducer from "./PostReducer";
import { firebaseReducer } from "react-redux-firebase";

const RootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
export default RootReducer;
