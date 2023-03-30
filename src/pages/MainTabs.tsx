import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import HomePage from "./HomePage";
import SpeakerList from "./SpeakerList";
import SpeakerDetail from "./SpeakerDetail";
import SessionDetail from "./SessionDetail";
import MapView from "./MapView";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faMapMarkedAlt,  
  faListDots,
  faUserCircle,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import "./MainTabs.scss";
import Profile from "./Profile";
import GroupNoExperience from "./GroupNoExperience";
import Groups from './Groups'
import Experiences from './Experiences'

interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <>
          <Redirect exact path="/tabs" to="/tabs/home" />
          {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/tabs/home" render={() => <HomePage />} exact={true} />
          <Route path="/tabs/speakers" render={() => <SpeakerList />} exact={true} />
          <Route path="/tabs/speakers/:id" component={SpeakerDetail} exact={true} />
          {/* <Route path="/tabs/home/:id" component={SessionDetail} /> */}
          <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
          <Route path="/tabs/experience" render={() => <GroupNoExperience />} exact={true} />
          <Route path="/tabs/groups" render={() => <Groups />} exact={true} />
          <Route path="/tabs/about" render={() => <About />} exact={true} />
          <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
        </>
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        className="h-14 border-t-2 border-[#333333] bg-[#333333]"
      >
        <IonTabButton tab="home" href="/tabs/home" className="bg-[#333333]">
          <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/speakers" className="bg-[#333333]">
          <FontAwesomeIcon icon={faListDots} size="3x"  />
        </IonTabButton>
        <IonTabButton tab="group" href="/tabs/groups" className="bg-[#333333]">
          <FontAwesomeIcon icon={faBell} size="3x" />
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile" className="bg-[#333333]">
          <FontAwesomeIcon icon={faUserCircle} size="3x"/>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
