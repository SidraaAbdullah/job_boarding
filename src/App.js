import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/layout/NavBar";
import Dashboard from "./Components/dashboard/Dashboard";
import PostDetail from "./Components/JobPosting/PostDetail";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import CreateSubmit from "./Components/JobApplyig/CreateSubmit";
import CreatePost from "./Components/JobPosting/CreatePost";
import SubmitDetail from "./Components/JobApplyig/SubmitDetail";
import CreatePayment from "./Components/JobPayment/CreatePayment";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/accept/:id" component={CreatePayment} />
          <Route path="/applyPost/:id" component={SubmitDetail} />
          <Route path="/:id/createSubmit" component={CreateSubmit} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
