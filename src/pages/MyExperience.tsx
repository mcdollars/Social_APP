import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  return (
    <IonPage id="speaker-list">
      <IonContent>
      <div className="container experience-settings">
      <div
        className="fixed w-full top-0 left-0 flex justify-between items-center p-2 shadow-md rounded-b-lg bg-white"
      >
        <div className="w-8">
          <img src="assets/images/discover/back.png" alt="" />
        </div>
        <span className="grow text-center">My Experience</span>
      </div>

      <div className="">
        <div className="mt-10 mb-16">
          <img className="w-full -mt-1" src="assets/images/82-90/world.png" alt="" />
        </div>
      </div>

      <div
        className="fixed w-full bottom-0 left-0 flex justify-around items-center p-3 shadow-md rounded-t-3xl bg-white"
      >
        <div className="flex flex-col items-center">
          <span className="font-bold">10</span>
          <span className="text-xs font-medium">Countries</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">23</span>
          <span className="text-xs font-medium">Cities</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">30</span>
          <span className="text-xs font-medium">Experiences</span>
        </div>
      </div>
    </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  // mapStateToProps: (state) => ({
  //   // speakers: selectors.getGroups(state),
  //   // speakerSessions: selectors.getSpeakerSessions(state),
  // }),
  component: React.memo(Groups),
});
