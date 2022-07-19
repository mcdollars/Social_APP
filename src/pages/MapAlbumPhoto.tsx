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
      <div className="bg-text-main-color">
    <div className="container-mx-auto">
        <div className="content-place-details">
            <div className="flex items-center justify-between px-3 pt-8 pb-3">
                <div className="">
                    <img src="assets/images/experiences/close-light.png" alt=""/>
                </div>
                <div className="text-white">Caesars Boulevard</div>
                <div className="">
                    <img src="assets/images/home/ariana-small.png" alt="" />
                </div>
            </div>
            <div className="text-white font-medium text-xs bg-main-color w-fit mx-auto px-2 rounded-full py-1">
                <span><img src="assets/images/experiences/small-location-light.png" alt=""className="inline-block mr-2 -mt-px"/></span>Chiang
                Mai, Thailand
            </div>
            <div className="mt-44 mb-52">
                <img src="assets/images/experiences/place-1.png" alt="" className="w-full" />
            </div>
            <div className="text-center text-sm text-white">
                <span>
                    <img src="assets/images/experiences/left-dark.png" alt="" className="inline-block" />
                </span>
                <span className="mx-14">1/8</span>
                <span>
                    <img src="assets/images/experiences/right-light.png" alt="" className="inline-block" />
                </span>
            </div>
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
