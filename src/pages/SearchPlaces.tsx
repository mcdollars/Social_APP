import React, { useEffect } from "react";
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
import { useParams } from "react-router";

interface OwnProps {
  setOpen: any;
}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ setOpen }) => {
  const params: any = useParams();

  useEffect(() => {
    console.log('entered')
  },[])

  return (
    <IonPage id="speaker-list">
      <IonContent>
        {params && params.type === "people" && (
          <div className="container experience-settings">
            <div className="pt-4 pb-2 px-2">
              <div className="flex justify-between items-center">
                <div className="w-8" onClick={() => setOpen(false)}>
                  <img src="assets/images/discover/back.png" alt="" />
                </div>
                <div className="grow relative">
                  <input
                    className="w-full border border-slate-100 py-2 pl-8 rounded-lg"
                    type="text"
                    placeholder="Search places"
                  />
                  <img
                    className="w-5 absolute top-3 left-2"
                    src="assets/images/discover/search.png"
                    alt="" 
                  />
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex items-center bg-lines-color p-1 rounded-lg">
                  <div className="mr-1">
                    <img
                      className="w-5"
                      src="assets/images/experiences/GridFour.png"
                      alt=""
                    />
                  </div>
                  <div className="bg-white py-1 px-2 rounded-md">
                    <img
                      className="w-5"
                      src="assets/images/experiences/UserCircle.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-4 mr-2"
                      src="assets/images/discover/Filter.png"
                      alt=""
                    />
                  </div>
                  <span className="main-color font-medium text-md">Filter</span>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="text-sm px-4 mt-3">
              <span className="text-gray-color font-medium">
                Who is planning similar experience
              </span>
              <div className="flex items-center mt-4">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar.png"
                  alt=""
                />
                <span className="text-base">Esther Howard</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-1.png"
                  alt=""
                />
                <span className="text-base">Courtney Henry</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-2.png"
                  alt=""
                />
                <span className="text-base">Floyd Miles</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-3.png"
                  alt=""
                />
                <span className="text-base">Darlene Robertson</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-4.png"
                  alt=""
                />
                <span className="text-base">Albert Flores</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-5.png"
                  alt=""
                />
                <span className="text-base">Dianne Russel</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-6.png"
                  alt=""
                />
                <span className="text-base">Bessie Cooper</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-7.png"
                  alt=""
                />
                <span className="text-base">Leslie Alexander</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="mr-3 w-10"
                  src="assets/images/53/avatar-8.png"
                  alt=""
                />
                <span className="text-base">Ronald Richards</span>
              </div>
            </div>
          </div>
        )}
        {params && params.type === "photo" && (
          <div className="container experience-settings">
            <div className="pt-4 pb-2 px-2">
              <div className="flex justify-between items-center">
                <div className="w-8">
                  <img src="assets/images/discover/back.png" alt="" />
                </div>
                <div className="grow relative">
                  <input
                    className="w-full border border-slate-100 py-2 pl-8 rounded-lg"
                    type="text"
                    placeholder="Search places"
                  />
                  <img
                    className="w-5 absolute top-3 left-2"
                    src="assets/images/discover/search.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex items-center bg-lines-color p-1 rounded-lg">
                  <div className="mr-1 bg-white py-1 px-2 rounded-md">
                    <img
                      className="w-5"
                      src="assets/images/experiences/GridFour.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img
                      className="w-5"
                      src="assets/images/experiences/UserCircle.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-4 mr-2"
                      src="assets/images/discover/Filter.png"
                      alt=""
                    />
                  </div>
                  <span className="main-color font-medium text-md">Filter</span>
                </div>
              </div>
            </div>
            <div className="text-sm mt-3">
              <div className="grid grid-cols-3 grid-rows-4 gap-px">
                <img
                  className="w-full"
                  src="assets/images/54/image 8.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 286.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 287.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 288.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 289.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 290.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 291.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 292.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 284.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 293.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 294.png"
                  alt=""
                />
                <img
                  className="w-full"
                  src="assets/images/54/Rectangle 295.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
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
