import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Student from "./pages/Student";
import ScoreStu from "./pages/ScoreStu";
import NationScore from "./pages/NationScore";
import EditorialScore from "./pages/EditorialScore";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/scorestu" component={ScoreStu} />
        <Route exact path="/nation" component={NationScore} />
        <Route exact path="/editorial" component={EditorialScore} />
      </Switch>
    </Router>
  );
}

export default App;
