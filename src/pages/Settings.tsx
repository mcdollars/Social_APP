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
          <div className="flex justify-between items-center p-2 shadow-md rounded-b-lg bg-white">
            <div className="w-8">
              <img src="assets/images/discover/back.png" alt="" />
            </div>
            <span className="grow text-center">Settings</span>
          </div>

          <div className="px-3 mt-4">
            <a href="#" className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-3">
                  <img
                    className="w-6"
                    src="assets/images/82-90/Bell.png"
                    alt=""
                  />
                </div>
                <span>Notifications</span>
              </div>
              <div>
                <img src="assets/images/82-90/Vector.png" alt="" />
              </div>
            </a>
            <a href="#" className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="mr-3">
                  <img
                    className="w-6"
                    src="assets/images/82-90/Translate.png"
                    alt=""
                  />
                </div>
                <span>Language</span>
              </div>
              <div>
                <img src="assets/images/82-90/Vector.png" alt="" />
              </div>
            </a>
            <a href="#" className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="mr-3">
                  <img
                    className="w-6"
                    src="assets/images/82-90/Delete.png"
                    alt=""
                  />
                </div>
                <span className="text-pink-color">Request Delete Account</span>
              </div>
            </a>
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
