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
          <div className="container mx-auto">
            <div className="content-discover">
              <div className="bg-white px-3 pt-8 pb-4 border-b">
                <div className="relative">
                  <input
                    type="text"
                    className="text-gray-color text-sm border w-full py-2 indent-10 rounded-md"
                    placeholder="Search places, people, categories"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 translate-x-full">
                    <img src="assets/images/discover/search.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-lines-color"></div>
              <div className="font-medium text-main-color pl-5 pt-3">
                Select the category
              </div>
              <div className="px-6 mt-8 mb-5">
                <div className="relative mb-3 rounded-full">
                  <img
                    src="assets/images/discover/image-1.png"
                    alt=""
                    className="rounded-full"
                  />
                  <div className="absolute rounded-full py-2 px-6 item top-1/2 left-3 -translate-y-1/2">
                    Bars
                  </div>
                </div>
                <div className="relative mb-3 rounded-full">
                  <img
                    src="assets/images/discover/image-2.png"
                    alt=""
                    className="rounded-full"
                  />
                  <div className="absolute rounded-full py-2 px-6 item top-1/2 left-3 -translate-y-1/2">
                    Clubs
                  </div>
                </div>
                <div className="relative mb-3 rounded-full">
                  <img
                    src="assets/images/discover/image-3.png"
                    alt=""
                    className="rounded-full"
                  />
                  <div className="absolute rounded-full py-2 px-6 item top-1/2 left-3 -translate-y-1/2">
                    Beach
                  </div>
                </div>
                <div className="relative mb-3 rounded-full">
                  <img
                    src="assets/images/discover/image-4.png"
                    alt=""
                    className="rounded-full"
                  />
                  <div className="absolute rounded-full py-2 px-6 item top-1/2 left-3 -translate-y-1/2">
                    Restaurant
                  </div>
                </div>
                <div className="relative mb-3 rounded-full">
                  <img
                    src="assets/images/discover/image-5.png"
                    alt=""
                    className="rounded-full"
                  />
                  <div className="absolute rounded-full py-2 px-6 item top-1/2 left-3 -translate-y-1/2">
                    Hotels
                  </div>
                </div>
              </div>
              <div className="font-medium text-main-color pl-5 pt-3 mb-5">
                Live Trips
              </div>
              <div className="holder-images grid grid-cols-3 gap-px mb-32">
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
              <div className="w-full fixed bottom-0 left-0 shadow-md rounded-t-xl bg-white">
                <div className="flex items-center">
                  <div className="w-1/5 relative pb-6 pt-4">
                    <div className="">
                      <img
                        src="assets/images/home/home-icon.png"
                        className="mx-auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="absolute bg-main-color h-1 w-12 rounded-full top-0 left-0 translate-x-1/3"></div>
                  <div className="w-1/5 relative pb-6 pt-4">
                    <div className="">
                      <img
                        src="assets/images/home/search-icon.png"
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="w-1/5 relative pb-6 pt-4">
                    <div className="item-se">
                      <img
                        src="assets/images/home/home-logo.png"
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="w-1/5 relative pb-6 pt-4">
                    <div className="">
                      <img
                        src="assets/images/home/users-icon.png"
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="w-1/5 relative pb-6 pt-4">
                    <div className="">
                      <img
                        src="assets/images/home/small-user-pic.png"
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
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
