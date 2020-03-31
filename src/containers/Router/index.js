import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import UserPage from '../UserPage';
import SingUp from '../SingUp';
import PostDetails from '../PostDetails';


export const routes = {
  loginPage: "/",
  singUp: "/singUp",
  userPage: "/userPage",
  postDetails: "/postDetails"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.singUp} component={SingUp} />
        <Route exact path={routes.userPage} component={UserPage} />
        <Route exact path={routes.postDetails} component={PostDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
