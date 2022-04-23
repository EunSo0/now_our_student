import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Student from "./pages/Student";
import Score from "./pages/Score";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/score" component={Score} />
      </Switch>
    </Router>
  );
}

export default App;
