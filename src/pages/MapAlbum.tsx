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
        <div className="container mx-atuto">
          <div className="content-interactive-map">
            <div className="flex items-center px-3 pt-8 pb-3 bg-white rounded-b-xl">
              <div className="">
                <img src="assets/images/createaccount/close.png" alt="" />
              </div>
              <div className="text-main-color bg-lines-color flex text-xs mx-auto font-medium rounded-lg p-px">
                <div className="px-10 py-1.5 m-px rounded-lg">Map</div>
                <div className="px-8 py-1.5 m-px bg-white rounded-lg">
                  Album
                </div>
              </div>
            </div>
          </div>
          <div className="holder-images grid grid-cols-3 gap-px mb-5">
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-285.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-286.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-287.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-288.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-289.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-290.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-291.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-292.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-284.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-293.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-294.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="image-holder w-full h-full">
              <img
                src="assets/images/onboarding/Rectangle-295.png"
                className="w-full h-full"
                alt=""
              />
            </div>
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
