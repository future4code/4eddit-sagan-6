import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import UserPage from '../UserPage';
import SingUpPage from '../SingUpPage';
import PostDetails from '../PostDetails';


export const routes = {
  loginPage: "/",
  singUpPage: "/singUpPage",
  userPage: "/userPage",
  postDetails: "/postDetails"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.singUpPage} component={SingUpPage} />
        <Route exact path={routes.userPage} component={UserPage} />
        <Route exact path={routes.postDetails} component={PostDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
