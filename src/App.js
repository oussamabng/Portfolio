import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//? import screens
import Home from "./screens/Home.jsx"

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
    </Router>
  );
}

export default App;
