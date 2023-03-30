import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
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

import "leaflet/dist/leaflet.css";

import MainTabs from "./pages/MainTabs";
import { connect } from "./data/connect";
import { AppContextProvider } from "./data/AppContext";
import { loadConfData } from "./data/sessions/sessions.actions";
import {
  setIsLoggedIn,
  setUsername,
  loadUserData,
} from "./data/user/user.actions";
import { createStore } from "./util/store";
import { Schedule } from "./models/Schedule";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { PrivatePages, PublicPages } from "./routes";
import RedirectToLogin from "./components/RedirectToLogin";
import Auth from "./helpers/Auth";
{
  /*
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import Tutorial from "./pages/Tutorial";
import HomeOrTutorial from "./components/HomeOrTutorial";
import RedirectToLogin from "./components/RedirectToLogin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SignupPhoneNumber from "./pages/SignupPhoneNumber";
import SignupVerify from "./pages/SignupVerify";
import CompleteProfile from "./pages/CompleteProfile";
import SetupInterest from "./pages/SetupInterest";
import LoginPhoneNumber from "./pages/LoginPhoneNumber";

import ViewAlbum from "./pages/ViewAlbum";
import Map from "./pages/Map";
import MapAlbum from "./pages/MapAlbum";
import MapAlbumPhoto from "./pages/MapAlbumPhoto";
import Tips from "./pages/Tips";
import SelectCategory from "./pages/SelectCategory";
import Discovery from "./pages/Discovery";
import CategorySearch from "./pages/CategorySearch";
import Groups from "./pages/Groups";
import MyGroups from "./pages/MyGroups";
import CreateGroup from "./pages/CreateGroup";
import InviteParticipants from "./pages/InviteParticipants";
import GroupDiscover from "./pages/GroupDiscover";
import GroupFeed from "./pages/GroupFeed";
import GroupMapExperience from "./pages/GroupMapExperience";
import GroupExperience from "./pages/GroupExperience";
import GroupNoExperience from "./pages/GroupNoExperience";
import GroupExperienceList from "./pages/GroupExperienceList";
import PlanExperience from "./pages/PlanExperience";
import CreatePlanExperience from "./pages/CreatePlanExperience";
import AdvanceSettings from "./pages/AdvanceSettings";
import ExperienceMap from "./pages/ExperienceMap";
import SearchPlaces from "./pages/SearchPlaces";
import ExperienceDetails from "./pages/ExperienceDetails";
import ExperienceSuggestions from "./pages/ExperienceSuggestions";
import ExperienceSaved from "./pages/ExperienceSaved";
import Experiences from "./pages/Experiences";
import CreateExperience from "./pages/CreateExperience";
import CreateExperienceMap from "./pages/CreateExperienceMap";
import CreateExperienceActivity from "./pages/CreateExperienceActivity";
import CloseCreateExperience from "./pages/CloseCreateExperience";
import AddQuickTips from "./pages/AddQuickTips";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import MyExperience from "./pages/MyExperience";
import UserProfile from "./pages/UserProfile";
import UserExperience from "./pages/UserExperience";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import ExperienceMapMostPopular from "./pages/ExperienceMapMostPopular";
*/
}
// import { PrivatePages, PublicPages } from "./routes";

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

  const getRoutes = (routes: any, type: string) => {
    if (type === "private") {
      return routes.map((route: any, index: any) => (
        <PrivateRoute
          key={index}
          exact={route.exact}
          path={route.path}
          // auth={Auth}
          // userProfile={userProfile}
          component={route.component}
        />
      ));
    }

    return routes.map((route: any, index: any) => (
      <PublicRoute
        key={index}
        exact={route.exact}
        // auth={Auth}
        path={route.path}
        component={route.component}
      />
    ));
  };

  return schedule.groups.length === 0 ? (
    <div></div>
  ) : (
    <IonApp className={`${darkMode ? "dark-theme" : ""} bg-[#EBECF0]`}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <RedirectToLogin
              setIsLoggedIn={setIsLoggedIn}
              setUsername={setUsername}
            />
            {getRoutes(PublicPages, "public")}
            {getRoutes(PrivatePages, "private")}
            {Auth.validate() ? (
              <Route path="/tabs" render={() => <MainTabs />} />
            ) : (
              <Redirect to="/login" />
            )}
            {/*
            <Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/login-phone-number" component={LoginPhoneNumber} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup-phone-number" component={SignupPhoneNumber} />
            <Route path="/signup-verify-number" component={SignupVerify} />
            <Route path="/signup-interest" component={SetupInterest} />
            <Route
              path="/signup-complete-profile"
              component={CompleteProfile}
            />
            <Route path="/support" component={Support} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/view-album" component={ViewAlbum} />
            <Route path="/map" component={Map} />
            <Route path="/map-album" component={MapAlbum} />
            <Route path="/map-album-photo" component={MapAlbumPhoto} />
            <Route path="/tips" component={Tips} />
            <Route path="/select-category" component={SelectCategory} />
            <Route path="/discovery/:type" component={Discovery} />
            <Route path="/category-search" component={CategorySearch} />
            <Route path="/groups" component={Groups} />
            <Route path="/my-groups" component={MyGroups} />
            <Route path="/groups-create" component={CreateGroup} />
            <Route path="/invite-participant" component={InviteParticipants} />
            <Route
              path="/group-map-experience"
              component={GroupMapExperience}
            />
            <Route path="/group-discover" component={GroupDiscover} />
            <Route path="/group-feed" component={GroupFeed} />
            <Route path="/group-experience" component={GroupExperience} />
            <Route path="/group-no-experience" component={GroupNoExperience} />
            <Route
              path="/group-experience-list"
              component={GroupExperienceList}
            />
            <Route path="/plan-experience" component={PlanExperience} />
            <Route
              path="/create-plan-experience"
              component={CreatePlanExperience}
            />
            <Route path="/advance-settings" component={AdvanceSettings} />
            <Route path="/experience-map" component={ExperienceMap} />
            <Route path="/search-places/:type" component={SearchPlaces} />
            <Route path="/experience-details" component={ExperienceDetails} />
            <Route
              path="/experience-suggestions"
              component={ExperienceSuggestions}
            />
            <Route path="/experience-saved" component={ExperienceSaved} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/create-experiences" component={CreateExperience} />
            <Route
              path="/popular-experiences-map"
              component={ExperienceMapMostPopular} exact
            />
            <Route
              path="/create-experiences-map"
              component={CreateExperienceMap} exact
            />
            <Route
              path="/create-experiences-activity"
              component={CreateExperienceActivity}
            />
            <Route
              path="/close-create-experiences"
              component={CloseCreateExperience}
            />
            <Route path="/add-quick-tips" component={AddQuickTips} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/settings" component={Settings} />
            <Route path="/my-experiences" component={MyExperience} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/user-experience" component={UserExperience} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" component={Messages} />
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
            */}
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
