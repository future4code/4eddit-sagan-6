import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import UserPage from '../UserPage';
import SingUp from '../SingUp';


export const routes = {
  root: "/",
  singUp: "/singUp",
  userPage: "/userPage"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.singUp} component={SingUp} />
        <Route exact path={routes.userPage} component={UserPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
