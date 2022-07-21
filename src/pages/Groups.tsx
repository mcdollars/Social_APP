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
        <div className="container-mx-auto">
          <div className="content-Goups">
            <div className="bg-white px-3 pt-8 pb-2 shadow-md rounded-b-xl">
              <div className="flex justify-between">
                <div></div>
                <div>Groups</div>
                <div>
                  <img src="/assets/images/Groups/user-plus.png" alt="" />
                </div>
              </div>
              <div className="mt-4">
                <ul className="list-none flex gap-2.5 pb-2">
                  <li className="bg-lines-color h-8 rounded-3xl px-6 py-2 text-main-color flex justify-center items-center">
                    <img src="/assets/images/Groups/Discovery.png" alt="" />
                    <div className="ml-2">Discover</div>
                  </li>
                  <li className="bg-lines-color h-8 rounded-3xl px-6 py-2 flex justify-center items-center text-main-color">
                    <img src="/assets/images/Groups/2 User.png" alt="" />
                    <div className="ml-2">My groups</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-3xl my-4 mx-3 py-4 px-3">
              <div className="text-xs flex secondary-color px-3 border-b pb-2 mb-3">
                <div className="mr-2">
                  <img src="assets/images/home/discovery-icon.png" alt="" />
                </div>
                <div className="">
                  Post from <span className="font-bold">Thailand Group</span>
                </div>
              </div>
              <div className="flex mb-3">
                <div className="w-1/6 mr-2">
                  <img src="assets/images/home/maria-pic.png" alt="" />
                </div>
                <div className="text-sm mr-4 w-2/3 text-main-color font-light">
                  <span className="font-medium">Maria lit</span> added
                  <span className="font-medium">Thailand Experience</span>
                  <br />
                  <span className="text-gray-color text-xs">
                    April 20, 2021
                  </span>
                </div>
                <div className="1/6">
                  <img src="assets/images/home/more-icon.png" alt="" />
                </div>
              </div>
              <div className="text-main-color text-sm font-light px-2 mb-3">
                Samui Island
              </div>
              <div className="mb-3 rounded-3xl relative">
                <img
                  src="assets/images/home/nature-home-2.png"
                  alt=""
                  className="rounded-3xl mx-auto"
                />
                <div className="absolute bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <img src="assets/images/home/light-location.png" alt="" />
                </div>
              </div>
              <div className="flex justify-between mb-3 text-main-color pb-3 px-3">
                <div className="flex">
                  <div className="flex ml-4">
                    <img src="/assets/images//Groups/Heart.png" alt="" />
                    <span className="ml-4">32</span>
                  </div>
                  <div className="flex ml-4">
                    <img src="/assets/images/Groups/Chat.png" alt="" />
                    <span className="ml-4">0</span>
                  </div>
                </div>
                <div>
                  <img src="/assets/images/Groups/Bookmark.png" alt="" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl mt-4 mb-28 mx-3 py-4 px-3">
              <div className="text-xs flex secondary-color px-3 border-b pb-2 mb-3">
                <div className="mr-2">
                  <img src="assets/images/home/discovery-icon.png" alt="" />
                </div>
                <div className="">
                  Post from <span className="font-bold">Bali Group</span>
                </div>
              </div>
              <div className="flex mb-3">
                <div className="w-1/6 mr-2">
                  <img src="assets/images/home/roman-pic.png" alt="" />
                </div>
                <div className="text-sm mr-4 w-2/3 text-main-color font-light">
                  <span className="font-medium">Roman lit</span> added
                  <span className="font-medium">Bali Experience</span>
                  <br />
                  <span className="text-gray-color text-xs">
                    April 20, 2021
                  </span>
                </div>
                <div className="1/6">
                  <img src="assets/images/home/more-icon.png" alt="" />
                </div>
              </div>
              <div className="text-main-color text-sm font-light px-2 mb-3">
                Bali Island
              </div>
              <div className="mb-3 rounded-3xl relative">
                <img
                  src="assets/images/home/nature-home-3.png"
                  alt=""
                  className="rounded-3xl mx-auto"
                />
                <div className="absolute bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <img src="assets/images/home/light-location.png" alt="" />
                </div>
              </div>
              <div className="flex justify-between mb-3 text-main-color pb-3 px-3">
                <div className="flex">
                  <div className="flex ml-4">
                    <img src="/assets/images//Groups/Heart.png" alt="" />
                    <span className="ml-4">32</span>
                  </div>
                  <div className="flex ml-4">
                    <img src="/assets/images/Groups/Chat.png" alt="" />
                    <span className="ml-4">0</span>
                  </div>
                </div>
                <div>
                  <img src="/assets/images/Groups/Bookmark.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full fixed bottom-0 left-0 shadow-md rounded-t-xl bg-white">
              <div className="flex items-center">
                <div className="w-1/5 relative pb-6 pt-4">
                  <div className="">
                    <img
                      src="assets/images/discover/Home.png"
                      className="mx-auto"
                      alt=""
                    />
                  </div>
                </div>
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
                      src="assets/images/Groups/3 User.png"
                      alt=""
                      className="mx-auto"
                    />
                  </div>
                  <div className="absolute bg-main-color h-1 w-12 rounded-full top-0 left-0 translate-x-1/3"></div>
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
