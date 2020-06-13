import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { HomeScreen } from "navigation/HomeScreen.js";
import { OrganizerScreen } from "navigation/OrganizerScreen.js";
import { ParticipantScreen } from "navigation/ParticipantScreen.js";
import { AccountScreen } from "navigation/AccountScreen.js";
import { DebateScreen } from "navigation/DebateScreen.js";
import { SignInScreen } from "navigation/SignInScreen.js";
import { SignUpScreen } from "navigation/SignUpScreen.js";
import { MessageBox } from "components/MessageBox";
import { ProtocolScreen } from "navigation/ProtocolScreen.js";
import { TournamentScreen } from "navigation/TournamentScreen.js";

import { NewTournament } from "organizer/NewTournament.js";
import { CurrentTournaments } from "organizer/CurrentTournaments.js";
import { FinishedTournaments } from "organizer/FinishedTournaments.js";

import { withRouter } from "react-router-dom";

import { restoreSession } from "actions";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

ScrollToTop = withRouter(ScrollToTop);

function App(props) {
  useEffect(props.restoreSession, []);

  return (
    <Router basename="/debater/frontend">
      <ScrollToTop />
      <MessageBox />
      <div className="App">
        {props.user.logged ? (
          <>
            <Redirect to="/" />
            <Switch>
              <Route exact path="/konto">
                <AccountScreen />
              </Route>
              <Route path="/debata/:id">
                <DebateScreen />
              </Route>
              <Route exact path="/protokol">
                <ProtocolScreen />
              </Route>

              <Route path="/turniej/:id">
                <TournamentScreen />
              </Route>
              <Route exact path="/nowy-turniej">
                <NewTournament />
              </Route>
              <Route exact path="/aktualne-turnieje">
                <CurrentTournaments />
              </Route>
              <Route exact path="/zakonczone-turnieje">
                <FinishedTournaments />
              </Route>

              <Route path="/">
                {props.user.mode === "organizer" ? (
                  <OrganizerScreen />
                ) : (
                  <ParticipantScreen />
                )}
              </Route>
            </Switch>
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
const mapDispatchToProps = { restoreSession };

export default connect(mapStateToProps, mapDispatchToProps)(App);
