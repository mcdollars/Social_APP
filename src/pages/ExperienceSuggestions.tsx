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
          <div className="pt-4 px-2">
            <div className="flex items-center">
              <div className="w-8">
                <img src="assets/images/discover/back.png" alt="" />
              </div>
              <span className="grow text-center font-medium">Suggestions</span>
            </div>
          </div>
          <div className="text-sm mt-3">
            <div className="grid grid-cols-3 grid-rows-4 gap-px">
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-1.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-2.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-3.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-4.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-5.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-6.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-7.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-8.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-9.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-10.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-11.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-12.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-13.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-14.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-15.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-16.png"
                alt=""
              />
              <img
                className="w-full"
                src="assets/images/56/Rectangle 284-17.png"
                alt=""
              />
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
