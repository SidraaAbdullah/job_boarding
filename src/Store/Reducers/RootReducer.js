import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import PostReducer from "./PostReducer";
import { firebaseReducer } from "react-redux-firebase";
import PostApplyReducer from "./PostApplyReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  applyPost: PostApplyReducer,
});
export default RootReducer;
