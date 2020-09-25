import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import  Users  from "./pages/Users";
import  NewUser from "./pages/NewUser";

export const useRoutes = () => {
    return (
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/newUser" exact>
          <NewUser />
        </Route>
        <Redirect to="/users" />
      </Switch>
    );
  
};
