import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Menu from "./containers/Menu";
import Location from "./containers/Location";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/location" exact component={Location} />
      <Route component={NotFound} />
    </Switch>
  );
}
