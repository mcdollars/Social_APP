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
          <div style={{ fontFamily: "poppins" }} className="pt-4 pb-2 px-2">
            <div className="w-8">
              <img src="assets/images/discover/back.png" alt="" />
            </div>
            <div className="mt-4">
              <span className="text-2xl font-medium">Girls trip</span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-xs bg-pink-500  text-white px-3 py-1 rounded-md font-light"
              >
                Not started yet
              </a>
            </div>
            <div className="mt-3 flex items-center">
              <div className="mr-2">
                <img className="w-4" src="assets/images/55/clock.png" alt="" />
              </div>
              <span>June 29, 2022</span>
            </div>
            <div className="mt-3 flex items-center">
              <div className="mr-2">
                <img
                  className="w-4"
                  src="assets/images/55/map-pin.png"
                  alt=""
                />
              </div>
              <span>Israel</span>
            </div>
            <div className="mt-3 flex items-center">
              <div className="mr-1.5">
                <img className="w-5" src="assets/images/55/globe.png" alt="" />
              </div>
              <span>Public</span>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <a
                className="bg-lines-color w-1/2 py-2 rounded-md mr-3 text-center font-medium"
                href="#"
              >
                Edit
              </a>
              <a
                className="bg-main-color w-1/2 py-2 rounded-md text-center text-white"
                href="#"
              >
                Invite
              </a>
            </div>
          </div>
          <hr className="mt-4 mb-2" />
          <div
            style={{ fontFamily: "poppins" }}
            className="flex justify-between items-center px-2"
          >
            <div className="flex items-center">
              <div>
                <img
                  className="w-6 mr-2"
                  src="assets/images/55/Users.png"
                  alt=""
                />
              </div>
              <span className="font-medium">87 Participants</span>
            </div>
            <div>
              <img
                className="w-2"
                src="assets/images/experiences/Shape.png"
                alt=""
              />
            </div>
          </div>
          <hr className="mt-2 mb-4" />
          <div className="text-sm mt-4 px-2">
            <span className="text-base font-bold">Pending invitation</span>
            <div style={{ fontFamily: "rubik" }}>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-9 mr-3"
                      src="assets/images/55/Ellipse 25.png"
                      alt=""
                    />
                  </div>
                  <span className="text-base">Bessie Cooper</span>
                </div>
                <a
                  className="bg-lines-color py-1 px-6 rounded-full text-base"
                  href="#"
                >
                  Cancel
                </a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-9 mr-3"
                      src="assets/images/55/Ellipse 25-1.png"
                      alt=""
                    />
                  </div>
                  <span className="text-base">Kristin Watson</span>
                </div>
                <a
                  className="bg-lines-color py-1 px-6 rounded-full text-base"
                  href="#"
                >
                  Cancel
                </a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-9 mr-3"
                      src="assets/images/55/Ellipse 25-2.png"
                      alt=""
                    />
                  </div>
                  <span className="text-base">Arlene McCoy</span>
                </div>
                <a
                  className="bg-lines-color py-1 px-6 rounded-full text-base"
                  href="#"
                >
                  Cancel
                </a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-9 mr-3"
                      src="assets/images/55/Ellipse 25-3.png"
                      alt=""
                    />
                  </div>
                  <span className="text-base">Ronald Richards</span>
                </div>
                <a
                  className="bg-lines-color py-1 px-6 rounded-full text-base"
                  href="#"
                >
                  Cancel
                </a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-9 mr-3"
                      src="assets/images/55/Ellipse 25-4.png"
                      alt=""
                    />
                  </div>
                  <span className="text-base">Jerome Bell</span>
                </div>
                <a
                  className="bg-lines-color py-1 px-6 rounded-full text-base"
                  href="#"
                >
                  Cancel
                </a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-9 mr-3"
                      src="assets/images/55/Ellipse 25-5.png"
                      alt=""
                    />
                  </div>
                  <span className="text-base">Darrel Steward</span>
                </div>
                <a
                  className="bg-lines-color py-1 px-6 rounded-full text-base"
                  href="#"
                >
                  Cancel
                </a>
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
