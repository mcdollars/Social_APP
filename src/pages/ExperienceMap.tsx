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
          <div className="pt-4 pb-2 px-2 shadow-md rounded-b-md bg-white">
            <div className="flex justify-between items-center">
              <div>
                <img src="assets/images/discover/back.png" alt="" />
              </div>
              <div className="flex items-center">
                <div>
                  <img src="assets/images/experiences/Ellipse 38.png" alt="" />
                </div>
                <span className="px-1">Girls trip</span>
                <div>
                  <img
                    className="w-5"
                    src="assets/images/experiences/Edit Square.png"
                    alt=""
                  />
                </div>
              </div>
              <span className="-mt-2 text-lg">...</span>
            </div>
            <div className="flex overflow-x-scroll mt-3">
              <a
                href="#"
                className="flex-none flex items-center justify-center bg-lines-color px-4 py-2 rounded-full mr-2"
              >
                <img
                  className="mr-2 w-4"
                  src="assets/images/experiences/Info.png"
                  alt=""
                />
                Details
              </a>
              <a
                href="#"
                className="flex-none flex items-center justify-center bg-lines-color px-4 py-2 rounded-full mr-2"
              >
                <img
                  className="mr-2 w-4"
                  src="assets/images/experiences/ChatCenteredDots.png"
                  alt=""
                />
                Suggestions
              </a>
              <a
                href="#"
                className="flex-none flex items-center justify-center bg-lines-color px-4 py-2 rounded-full"
              >
                <img
                  className="mr-2 w-4"
                  src="assets/images/experiences/BookmarkSimple.png"
                  alt=""
                />
                Saved Place
              </a>
            </div>
          </div>
          <div className="text-sm px-4 mt-4">
            <div className="flex justify-center mt-20 relative">
              <img src="assets/images/experiences/Vector.png" alt="" />
              <span
                style={{ top: "35%", left: "4%" }}
                className="absolute text-5xl"
              >
                ISRAEL
              </span>
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
