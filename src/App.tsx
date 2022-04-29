import { Storage } from "@ionic/storage";

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/tailwind.css";

import MainTabs from "./pages/MainTabs";
import { connect } from "./data/connect";
import { AppContextProvider } from "./data/AppContext";
import { loadConfData } from "./data/sessions/sessions.actions";
import {
  setIsLoggedIn,
  setUsername,
  loadUserData,
} from "./data/user/user.actions";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import Tutorial from "./pages/Tutorial";
import HomeOrTutorial from "./components/HomeOrTutorial";
import { Schedule } from "./models/Schedule";
import RedirectToLogin from "./components/RedirectToLogin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SignupPhoneNumber from "./pages/SignupPhoneNumber";
import SignupVerify from "./pages/SignupVerify";
import CompleteProfile from "./pages/CompleteProfile";
import SetupInterest from "./pages/SetupInterest";
import LoginPhoneNumber from "./pages/LoginPhoneNumber";

import { createStore, get, set } from "./util/store";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean;
  schedule: Schedule;
}

interface DispatchProps {
  loadConfData: typeof loadConfData;
  loadUserData: typeof loadUserData;
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface IonicAppProps extends StateProps, DispatchProps {}

const IonicApp: React.FC<IonicAppProps> = ({
  darkMode,
  schedule,
  setIsLoggedIn,
  setUsername,
  loadConfData,
  loadUserData,
}) => {
  useEffect(() => {
    loadUserData();
    loadConfData();
    const setupStore = async () => {
      await createStore("local");
    };

    setupStore();
    // eslint-disable-next-line
  }, []);

  return schedule.groups.length === 0 ? (
    <div></div>
  ) : (
    <IonApp className={`${darkMode ? "dark-theme" : ""}`}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/*
                We use IonRoute here to keep the tabs state intact,
                which makes transitions between tabs and non tab pages smooth
                */}
            <Route path="/tabs" render={() => <MainTabs />} />
            <Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/login-phone-number" component={LoginPhoneNumber} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup-phone-number" component={SignupPhoneNumber} />
            <Route path="/signup-verify-number" component={SignupVerify} />
            <Route
              path="/signup-complete-profile"
              component={CompleteProfile}
            />
            <Route path="/signup-interest" component={SetupInterest} />
            <Route path="/support" component={Support} />
            <Route path="/tutorial" component={Tutorial} />
            <Route
              path="/logout"
              render={() => {
                return (
                  <RedirectToLogin
                    setIsLoggedIn={setIsLoggedIn}
                    setUsername={setUsername}
                  />
                );
              }}
            />
            <Route path="/" component={HomeOrTutorial} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    schedule: state.data.schedule,
  }),
  mapDispatchToProps: {
    loadConfData,
    loadUserData,
    setIsLoggedIn,
    setUsername,
  },
  component: IonicApp,
});
