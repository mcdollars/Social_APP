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
        <div className="bg-background-color">
          <div className="container-mx-auto">
            <div className="content-inside-category-search">
              <div className="w-full shadow-md rounded-b-lg bg-white mb-1">
                <div className="flex justify-between p-3">
                  <div>
                    <img src="/assets/images/discover/back.png" alt="" />
                  </div>
                  <div>Beaches</div>
                  <div className="flex">
                    <img src="/assets/images/discover/Filter.png" alt="" />
                    <h2 className="ml-2 main-color">Filter</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 text-center text-sm font-medium">
              24 places found
            </div>
            <div className="holder-images grid grid-cols-3 gap-px">
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
                  src="assets/images/onboarding/Rectangle-289.png"
                  className="w-full h-full"
                  alt=""
                />
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
