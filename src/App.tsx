import React from "react";
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import './App.css';
import { About } from "./modules/about/About";
import { Home } from './modules/home/Home';

const Users = React.lazy(() => import(/*webpackChunkName: "prova"*/ './modules/users/Users'))

function Loader(){
  return (
    <h1>loading...</h1>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
