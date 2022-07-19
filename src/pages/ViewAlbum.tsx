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
      <div className="content-tailand-exp">
        <div className="flex items-center justify-between px-3 pt-8 pb-3">
            <div className="">
                <img src="assets/images/createaccount/close.png" alt=""/>
            </div>
            <div className="text-main-color">Thailand Experience</div>
            <div className="">
                <img src="assets/images/home/ariana-small.png" alt=""/>
            </div>
        </div>
        <div className="holder-images grid grid-cols-3 gap-px mb-5">
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-285.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-286.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-287.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-288.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-289.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-290.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-291.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-292.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-284.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-293.png" className="w-full h-full" alt="" />
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-294.png" className="w-full h-full" alt=""/>
            </div>
            <div className="image-holder w-full h-full">
                <img src="assets/images/onboarding/Rectangle-295.png" className="w-full h-full" alt=""/>
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
