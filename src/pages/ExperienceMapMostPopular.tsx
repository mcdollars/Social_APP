import React, { useRef, useState } from "react";
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
  useIonRouter,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonModal,
  IonList,
  IonItem,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import * as L from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { add, camera, bookmark, star } from "ionicons/icons";
import "./CreateExperienceMap.scss";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const router = useIonRouter();

  const goBack = () => {
    if (router.canGoBack()) {
      router.goBack();
    }
  };
  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div
          style={{ backgroundColor: "#91c5dc" }}
          className="container experience-settings"
        >
          <div className="flex justify-between items-center px-2 py-3 shadow-md rounded-b-lg bg-white">
            <div className="w-8" onClick={goBack}>
              <img src="assets/images/discover/back.png" alt="" />
            </div>
            <div className="grow text-center text-xs font-medium">
              <span className="bg-lines-color rounded-md py-2 px-1">
                <a href="#" className="px-4 bg-white rounded-md py-1">
                  Dooda
                </a>
                <a href="#" className="px-4">
                  Friends
                </a>
              </span>
            </div>
          </div>

          <div className="px-4">
            <div className="mt-10 ml-4 relative">
              <img src="assets/images/66/Vector.png" alt="" />
              <div className="absolute top-24 left-16">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287-1.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/27.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Nakhon Ratchasima
                  </span>
                </div>
              </div>
              <div className="absolute top-36 left-28">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287-4.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/25.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Sukhothai
                  </span>
                </div>
              </div>
              <div className="absolute top-48 left-12">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/12.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Khao Yai National Park
                  </span>
                </div>
              </div>
              <div className="absolute top-40 right-0">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287-3.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/15.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Bangkok
                  </span>
                </div>
              </div>
              <div className="absolute top-52 right-16">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287-2.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/18.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Kanchanaburi
                  </span>
                </div>
              </div>
              <div className="absolute bottom-32 left-2">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287-7.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/7.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Ayutthaya Thailand
                  </span>
                </div>
              </div>
              <div className="absolute bottom-20 left-12">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 287-5.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/3.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Koh Samui
                  </span>
                </div>
              </div>
              <div className="absolute bottom-2 left-24">
                <div className="relative">
                  <img
                    className="rounded-full border-2 border-slate-50 w-8 h-8 z-10 mx-auto"
                    src="assets/images/71/Rectangle 288.png"
                    alt=""
                  />
                  <img
                    className="absolute -top-2 right-4 z-20"
                    src="assets/images/71/1.png"
                    alt=""
                  />
                </div>
                <div className="-mt-2 z-0">
                  <span
                    style={{ fontSize: "12px" }}
                    className="text-xs font-medium px-2 bg-white py-1 rounded-full"
                  >
                    Similan Islands
                  </span>
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
