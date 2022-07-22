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
        <div className="container-mx-auto bg-lines-color">
          <div className="content-Experiences">
            <div className="bg-white px-3 pt-4 pb-2 shadow-md rounded-b-xl">
              <div className="flex items-center">
                <a href="#">
                  <img src="assets/images/82-90/Path.png" alt="" />
                </a>
              </div>
              <div className="flex justify-between items-center mr-6 mt-4">
                <div className="mr-6">
                  <img src="assets/images/82-90/avatar.png" alt="" />
                </div>
                <div className="flex justify-evenly">
                  <div className="flex flex-col items-center mr-3">
                    <h1 className="text-lg font-medium">12</h1>
                    <h6
                      style={{ fontSize: "12px" }}
                      className="secondary-color"
                    >
                      Countries
                    </h6>
                  </div>
                  <div className="flex flex-col items-center mr-3">
                    <h1 className="text-lg font-medium">56</h1>
                    <h6
                      style={{ fontSize: "12px" }}
                      className="secondary-color"
                    >
                      Cities
                    </h6>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-lg font-medium">25</h1>
                    <h6
                      style={{ fontSize: "12px" }}
                      className="secondary-color"
                    >
                      Experiences
                    </h6>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-xl font-medium">Roman Lit</span>
              </div>
              <div className="mt-3 space-x-2">
                <a
                  style={{ fontSize: "13px" }}
                  className="px-3 py-1.5 text-blue2-color border-blue-200 rounded-md border-2"
                  href="#"
                >
                  Travel
                </a>
                <a
                  style={{ fontSize: "13px" }}
                  className="px-3 py-1.5 text-pink-color border-pink-200 rounded-md border-2"
                  href="#"
                >
                  Seight Seeng
                </a>
                <a
                  style={{ fontSize: "13px" }}
                  className="px-3 py-1.5 text-color-green border-green-200 rounded-md border-2"
                  href="#"
                >
                  Adventure
                </a>
              </div>
              <div className="mt-5">
                <p className="text-xs leading-4 secondary-color">
                  Hi, I’m a UI/UX Designer, travelling a lot, looking for a
                  friends for travel together.
                </p>
              </div>
              <div className="flex justify-start mt-5">
                <a
                  className="grow flex justify-center items-center bg-main-color text-white rounded-md"
                  href="#"
                >
                  <span className="text-xs font-light">Follow</span>
                </a>
                <a className="w-12 ml-3" href="#">
                  <img src="assets/images/82-90/interests.png" alt="" />
                </a>
              </div>
              <div className="mt-4 flex overflow-x-scroll">
                <a
                  style={{ backgroundColor: "#47485f" }}
                  className="text-xs text-white px-4 py-2 rounded-full mr-2"
                  href="#"
                >
                  Expericences
                </a>
                <a
                  className="text-xs bg-lines-color px-4 py-2 rounded-full mr-2"
                  href="#"
                >
                  Photos
                </a>
                <a
                  className="text-xs bg-lines-color px-4 py-2 rounded-full mr-2"
                  href="#"
                >
                  Followers
                </a>
                <a
                  className="text-xs bg-lines-color px-4 py-2 rounded-full mr-2"
                  href="#"
                >
                  Following
                </a>
              </div>
            </div>
            <div className="p-3">
              <div className="rounded-xl bg-white p-3">
                <div className="flex justify-between">
                  <div>
                    <img
                      className="w-12"
                      src="assets/images/82-90/poster.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-bold">
                      David Smith <span className="font-light">added</span> Bali
                      Experience
                    </p>
                    <p
                      style={{ fontSize: "12px" }}
                      className="text-gray-color font-light mt-0.5"
                    >
                      April 20, 2021
                    </p>
                  </div>
                  <div>
                    <a href="#">
                      <img
                        className="w-4"
                        src="assets/images/82-90/More Square.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <p className="text-xs mt-3">
                  Trip to the island of Nusa Penida is a MUST. Text me if you
                  have any questions about the island
                </p>
                <div className="mt-2">
                  <div className="relative">
                    <img
                      className="rounded-lg w-full"
                      src="assets/images/82-90/post-img2.png"
                      alt=""
                    />
                    <a
                      style={{
                        bottom: 0,
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      className="absolute"
                      href="#"
                    >
                      <img src="assets/images/82-90/slide.png" alt="" />
                    </a>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <div className="mr-1">
                        <a href="#">
                          <img src="assets/images/82-90/Heart.png" alt="" />
                        </a>
                      </div>
                      <span className="text-xs font-medium">326</span>
                    </div>
                    <div>
                      <a href="#">
                        <span className="text-xs font-medium">23</span>
                      </a>
                      <span style={{ fontSize: "13px" }}>Comments</span>
                    </div>
                  </div>
                </div>
                <hr className="mt-2" />
                <div className="flex justify-around items-center mt-2">
                  <div className="flex flex-col items-center">
                    <a href="#" className="mb-2">
                      <img
                        className="w-4"
                        src="assets/images/82-90/Heart-like.png"
                        alt=""
                      />
                    </a>
                    <a className="text-xs secondary-color" href="#">
                      Like
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <a href="#" className="mb-2">
                      <img
                        className="w-4"
                        src="assets/images/82-90/Chat.png"
                        alt=""
                      />
                    </a>
                    <a className="text-xs secondary-color" href="#">
                      Comment
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <a href="#" className="mb-2">
                      <img
                        className="w-4"
                        src="assets/images/82-90/Send.png"
                        alt=""
                      />
                    </a>
                    <a className="text-xs secondary-color" href="#">
                      Share
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <a href="#" className="mb-2">
                      <img
                        className="w-4"
                        src="assets/images/82-90/Bookmark.png"
                        alt=""
                      />
                    </a>
                    <a className="text-xs secondary-color" href="#">
                      Save
                    </a>
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
