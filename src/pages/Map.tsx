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
      <div className="container mx-auto">
        <div className="content-interactive-map">
            <div className="flex items-center px-3 pt-8 pb-3 bg-white rounded-b-xl fixed w-full">
                <div className="">
                    <img src="assets/images/createaccount/close.png" alt="" />
                </div>
                <div className="text-main-color bg-lines-color flex text-xs mx-auto font-medium rounded-lg p-px">
                    <div className="px-10 py-1.5 m-px bg-white rounded-lg">Map</div>
                    <div className="px-8 py-1.5 m-px rounded-lg">Album</div>
                </div>
            </div>
        </div>
        <div className="">
            <img src="assets/images/experiences/world.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0">
            <img src="assets/images/rounded-logo.png" alt="" />
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
