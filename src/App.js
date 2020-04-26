import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "navigation/HomeScreen.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
