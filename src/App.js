import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { HomeScreen } from "navigation/HomeScreen.js";
import { ParticipantScreen } from "navigation/ParticipantScreen.js";
import { SignInScreen } from "navigation/SignInScreen.js";
import { SignUpScreen } from "navigation/SignUpScreen.js";

function App(props) {
  return (
    <Router>
      <div className="App">
        {props.user.logged ? (
          <>
            <Redirect to="/" />
            <ParticipantScreen />
          </>
        ) : (
          <Switch>
            <Route path="/logowanie">
              <SignInScreen />
            </Route>
            <Route path="/rejestracja">
              <SignUpScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
