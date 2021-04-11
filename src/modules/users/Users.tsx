import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "./User";

export default function Users() {
    let match = useRouteMatch();

  return (
    <div>
      <h1>Users</h1>

      <ul>
        <li>
          <Link to={`${match.url}/CiccioPasticcio`}>
              Ciccio pasticcio
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/MarioRossi`}>
            Mario Rossi
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:userId`}>
          <User />
        </Route>
        <Route path={match.path}>
          <h3>Please select a user.</h3>
        </Route>
      </Switch>
    </div>
  );
}