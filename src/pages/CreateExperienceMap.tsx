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
        <div
          style={{ backgroundColor: "#91c5dc" }}
          className="container experience-settings"
        >
          <div className="flex justify-between items-center p-2 shadow-md rounded-b-lg bg-white">
            <a className="w-8" href="#">
              <img src="assets/images/discover/back.png" alt="" />
            </a>
            <div className="text-sm text-center flex justify-center items-center border border-slate-200 py-1 px-4 rounded-full">
              <span className="mr-1 text-xs font-medium">Thai Vacation</span>
              <div>
                <img src="assets/images/experiences/Edit Square.png" alt="" />
              </div>
            </div>
            <div>
              <img src="assets/images/61/Rectangle 302.png" alt="" />
            </div>
          </div>

          <div className="px-4">
            <div className="mt-10 ml-4">
              <img src="assets/images/61/Group 33578.png" alt="" />
            </div>
            <div className="relative">
              <a className="absolute bottom-0 right-0" href="#">
                <img src="assets/images/61/add.png" alt="" />
              </a>
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
