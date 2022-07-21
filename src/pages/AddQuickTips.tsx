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
        <div>
          <div className="container experience-settings mb-64">
            <div className="pt-4 px-2 pb-2 rounded-b-md shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <img src="assets/images/discover/close.png" alt="" />
                </div>
                <span className="text-center font-medium ml-5">Quick Tips</span>
                <a
                  href="#"
                  className="text-xs font-medium py-1 px-3 bg-main-color text-white rounded-full"
                >
                  Add
                </a>
              </div>
            </div>
            <div className="text-sm mt-5 px-3">
              <div className="flex">
                <div className="mr-3">
                  <img src="assets/images/73-81/ON.png" alt="" />
                </div>
                <a href="#" className="text-gray-color">
                  {" "}
                  Add tip
                </a>
              </div>
              <div className="flex items-center mt-2">
                <div className="mr-3">
                  <img
                    className="w-4"
                    src="assets/images/73-81/arrow.png"
                    alt=""
                  />
                </div>
                <input
                  className="text-gray-color py-2 px-2"
                  placeholder="Add another tip"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full bottom-0 left-0">
            <div className="flex justify-around items-center py-2 rounded-t-lg px-6">
              <a href="#">
                <img
                  className="w-16"
                  src="assets/images/73-81/price-mute.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-10"
                  src="assets/images/73-81/flag-mute.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-10"
                  src="assets/images/73-81/like-mute.png"
                  alt=""
                />
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
