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
        <body className="w-full">
          <div className="container-mx-auto">
            <div className="content-Experience">
              <div className="flex items-center px-3 pt-4 pb-3 bg-white border-b">
                <div className="mr-2 w-6">
                  <img
                    className="w-full"
                    src="assets/images/82-90/close.png"
                    alt=""
                  />
                </div>
                <div className="text-main-color bg-lines-color flex text-xs mx-auto font-medium rounded-lg p-px">
                  <div className="px-4 py-1.5 m-px rounded-lg">
                    Notifications
                  </div>
                  <div className="px-4 py-1.5 m-px rounded-lg bg-white relative">
                    Message
                    <div className="absolute top-1 right-1">
                      <img src="assets/images/82-90/green.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
            <div className="flex grow">
              <div className="mr-2">
                <img src="assets/images/82-90/bg4.png" alt="" />
              </div>
              <div className="flex flex-col grow">
                <span className="text-sm font-medium">Michael Palmer</span>
                <span className="secondary-color text-xs flex-wrap mt-1">
                  Let’s meet in 15 minutes in Mama's Tacos at the South Beach?
                </span>
              </div>
            </div>
            <div className="w-20">
              <p style={{ fontSize: "12px" }} className="text-gray-color">
                04:12 PM
              </p>
            </div>
          </div>

          <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
            <div className="flex grow">
              <div className="mr-2">
                <img src="assets/images/82-90/bg4.png" alt="" />
              </div>
              <div className="flex flex-col grow">
                <span className="text-sm font-medium">Beverly Douglas</span>
                <div className="secondary-color text-xs mt-1 flex items-center">
                  <div className="mr-2">
                    <img src="assets/images/82-90/audio.png" alt="" />
                  </div>
                  <p>Sent a voice message</p>
                </div>
              </div>
            </div>
            <div className="w-20 flex flex-col items-center">
              <span style={{ fontSize: "12px" }} className="text-gray-color">
                03:50 PM
              </span>
              <div className="mt-2">
                <img src="assets/images/82-90/badge.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
            <div className="flex grow">
              <div className="mr-2">
                <img src="assets/images/82-90/bg3.png" alt="" />
              </div>
              <div className="flex flex-col grow">
                <span className="text-sm font-medium">Douglas Simpson</span>
                <span className="secondary-color text-xs flex-wrap mt-1">
                  Ok, no problem I can call you back
                </span>
              </div>
            </div>
            <div className="w-20">
              <span style={{ fontSize: "12px" }} className="text-gray-color">
                04:12 PM
              </span>
            </div>
          </div>

          <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
            <div className="flex grow">
              <div className="mr-2">
                <img src="assets/images/82-90/bg3.png" alt="" />
              </div>
              <div className="flex flex-col grow">
                <span className="text-sm font-medium">Sam Smith</span>
                <span className="secondary-color text-xs flex-wrap mt-1">
                  <span className="text-black">You</span> <br />
                  Can’t wait to see you
                </span>
              </div>
            </div>
            <div className="w-20">
              <span style={{ fontSize: "12px" }} className="text-gray-color">
                04:12 PM
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <img src="assets/images/82-90/add.png" alt="" />
          </div>
        </body>
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
