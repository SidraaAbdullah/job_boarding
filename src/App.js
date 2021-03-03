import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/layout/NavBar";
import Dashboard from "./Components/dashboard/Dashboard";
import PostDetail from "./Components/JobPosting/PostDetail";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import CreatePost from "./Components/JobPosting/CreatePost";
import SubmitDetail from "./Components/JobPosting/SubmitDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/submitDetail" component={SubmitDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
