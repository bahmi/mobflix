import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTERS from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTERS.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTERS.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTERS.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTERS.SIGN_UP}>
        <Signup />
      </Route>
    </Router>
  );
}
