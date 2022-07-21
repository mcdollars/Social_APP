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
          <div className="pt-4 px-2 pb-2 rounded-b-md shadow-md">
            <div className="flex items-center">
              <div className="w-8">
                <img src="assets/images/discover/back.png" alt="" />
              </div>
              <span className="grow text-center font-medium">Saved Places</span>
            </div>
          </div>
          <div className="text-sm mt-5 px-3">
            <div className="flex">
              <div className="w-1/2 mr-1">
                <div className="relative">
                  <img
                    className="w-full h-40"
                    src="assets/images/57/map.png"
                    alt=""
                  />
                  <img
                    className="rounded-full border-2 border-slate-50 absolute top-12 left-10 w-10 h-10 z-20"
                    src="assets/images/57/new stoty.png"
                    alt=""
                  />
                  <div className="flex justify-center items-center w-24 bg-white py-1 absolute top-20 left-4 rounded-md z-10">
                    <span className="mr-1 text-xs">Kata Beach</span>
                    <div>
                      <img src="assets/images/57/Plus.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-0.5">
                <div className="relative">
                  <img
                    className="w-full h-20"
                    src="assets/images/57/new stoty@2x.png"
                    alt=""
                  />
                  <a href="#">
                    <img
                      className="absolute top-1 right-1 w-5"
                      src="assets/images/57/delete.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="relative">
                  <img
                    className="w-full h-20"
                    src="assets/images/57/Rectangle 284.png"
                    alt=""
                  />
                  <a href="#">
                    <img
                      className="absolute top-1 right-1 w-5"
                      src="assets/images/57/delete.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="relative">
                  <img
                    className="w-full h-20"
                    src="assets/images/57/Rectangle 289.png"
                    alt=""
                  />
                  <a href="#">
                    <img
                      className="absolute top-1 right-1 w-5"
                      src="assets/images/57/delete.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs mt-3 secondary-color">
              Somewhere between the skytrains of Bangkok and the sacred sites
              gracing the former seat of the powerful Lanna Kingdom, Chiang Mai,
              Thailand is home to no small amount of natural beauty.
            </p>
          </div>
          <hr className="mt-3" />
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
