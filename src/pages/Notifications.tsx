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
        <body className="w-full">
          <div className="container-mx-auto">
            <div className="content-Experience">
              <div className="flex items-center px-3 pt-4 pb-3 bg-white border-b">
                <div className="mr-2 w-6">
                  <img
                    className="w-full"
                    src="assets/images/82-90/close.png"
                    alt=""
                  />
                </div>
                <div className="text-main-color bg-lines-color flex text-xs mx-auto font-medium rounded-lg p-px">
                  <div className="px-4 py-1.5 m-px rounded-lg bg-white">
                    Notifications
                  </div>
                  <div className="px-4 py-1.5 m-px rounded-lg relative">
                    Message
                    <div className="absolute top-1 right-1">
                      <img src="assets/images/82-90/green.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 ml-2">
            <span>New</span>
          </div>

          <div className="px-3 py-2 flex justify-between bg-lines-color">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  Reminder: you have an event coming up this week:
                  <span className="font-bold">Uptown meeting</span>
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>
            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="px-3 py-2 flex justify-between bg-lines-color">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti3.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-bold">Sam Smith</span> reacted to your
                  post
                  <span className="font-bold">Group name </span> post.
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>
            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="px-3 py-2 flex justify-between bg-lines-color">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti4.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  You have new request to respond in the group
                  <span className="font-bold">Group name</span>
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>
            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="px-3 py-2 flex justify-between bg-lines-color">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti1.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  Group name has 1 new post to see
                  <span className="font-bold">Uptown meeting</span>
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>
            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="px-3 py-2 flex justify-between bg-lines-color">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti2.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-bold">Diana Smith</span> commented on
                  your post in
                  <span className="font-bold">Group name.</span>
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>
            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="p-3 ml-2">
            <span>Earlier</span>
          </div>

          <div className="px-3 py-2 flex justify-between">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti6.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  You have new request to{" "}
                  <span className="font-bold">Group name</span>
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>

            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="px-3 py-2 flex justify-between">
            <div className="flex">
              <div className="mr-2">
                <img
                  className="w-8"
                  src="assets/images/82-90/noti7.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-bold">Group name</span> has 1 new post
                </p>
                <p style={{ fontSize: "12px" }} className="text-gray-color">
                  5 mins ago
                </p>
              </div>
            </div>

            <div>
              <a href="#">
                <img
                  className="w-6"
                  src="assets/images/82-90/More Square.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </body>
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
