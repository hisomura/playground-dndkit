import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import { BasicDnd } from "./components/BasicDnd";

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
              <Link to="/basic">Basic</Link>
            </li>
            <li>
              <Link to="/sortable">Sortable</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/basic">
            <BasicDnd/>
          </Route>
          <Route path="/sortable">
            <Home/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (<div>Home</div>)
}
