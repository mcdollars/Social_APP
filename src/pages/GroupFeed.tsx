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
        <div className="flex items-center px-3 pt-8 pb-3 bg-white rounded-b-xl fixed w-full">
          <div className="">
            <img src="assets/images/createaccount/close.png" alt="" />
          </div>
          <div className="text-main-color bg-lines-color flex text-xs mx-auto font-medium rounded-lg p-px">
            <div className="px-10 py-1.5 m-px rounded-lg">Feed</div>
            <div className="px-8 py-1.5 m-px bg-white rounded-lg">
              Experience
            </div>
          </div>
          <div>...</div>
        </div>
        <div className="container-mx-auto pt-20">
          <div className="content-feed p-4">
            <div className="flex justify-center">
              <img src="assets/images/Groups/Rectangle-bea.png" alt="" />
            </div>
            <div className="py-3 font-bold">Best travel advice</div>
            <div className="flex">
              <img src="/assets/images/Groups/Lock.png" alt="" />
              <div className="ml-2">Private</div>
            </div>
            <div className="py-3">
              <span className="font-bold">12</span> cities -
              <span className="font-bold">4 </span> Experiences
            </div>
            <p className="py-1">
              This group is about my personal experience and usuflul thing that
              can help you during your travel.
            </p>
            <ul className="list-none flex items-center gap-2.5 pb-2 overflow-x-scroll">
              <li>
                <div>
                  <img src="/assets/images/discover/search-diez.png" alt="" />
                </div>
              </li>
              <li className="">
                <div className="text-main-color border px-4 py-1 rounded-3xl w-max">
                  Healty Food
                </div>
              </li>
              <li className="">
                <div className="text-main-color border px-4 py-1 rounded-3xl w-max">
                  Sports & Fitness
                </div>
              </li>
              <li className="text-main-color border px-4 py-1 rounded-3xl">
                <div>Holiday</div>
              </li>
            </ul>
            <div className="flex items-center mt-5">
              <img src="/assets/images/Groups/avatar (1).png" alt="" />
              <button className="bg-main-color py-2 px-4 ml-2 rounded-3xl text-white">
                + Invite
              </button>
            </div>
            <div className="my-3">
              <div className="flex mt-5">
                <div className="relative flex">
                  <input
                    type="text"
                    className="p-2 rounded-3xl indent-10 text-color-blue bg-blue border w-4/5"
                    value="Add comment"
                  />

                  <img
                    src="/assets/images/Groups/interests.png"
                    alt=""
                    className="absolute left-0 top-0"
                  />
                </div>
                <div className="relative flex">
                  <input
                    type="text"
                    className="p-2 rounded-3xl indent-10 text-color-blue bg-blue border w-4/5"
                    value="Add comment"
                  />

                  <img
                    src="/assets/images/Groups/interests (1).png"
                    alt=""
                    className="absolute left-0 top-0"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>Admin</div>
              <div className="flex items-center mt-4">
                <img src="/assets/images/Groups/avatar (1).png" alt="" />
                <div className="ml-4">Lanna kingdom</div>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div>Top listings</div>
              <div>
                <img src="/assets/images/Groups/SortAscending.png" alt="" />
              </div>
            </div>
            <div className="bg-white rounded-3xl my-4 mx-3 py-4 px-3">
              <div className="flex mb-3">
                <div className="w-1/6 mr-2">
                  <img src="assets/images/home/ariana-pic.png" alt="" />
                </div>
                <div className="text-sm mr-4 w-2/3 text-main-color font-light">
                  <span className="font-medium">Arianna Grande</span> added
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
              <div className="text-main-color text-sm font-light px-2">
                Somewhere between the skytrains of Bangkok and the sacred sites
                gracing the former seat of the powerful Lanna Kingdom.
              </div>
              <div className="flex my-3">
                <div className="mr-1 px-4">
                  <img src="assets/images/home/location-icon.png" alt="" />
                </div>
                <div className="text-sm font-medium text-main-color">
                  Chiang Mai, Thailand
                </div>
              </div>
              <div className="mb-3 rounded-3xl relative">
                <img
                  src="assets/images/home/nature-home-1.png"
                  alt=""
                  className="rounded-3xl mx-auto"
                />
                <div className="absolute top-0 translate-y-1/2 right-0 -translate-x-1/2">
                  <img
                    src="assets/images/home/star-icon.png"
                    alt=""
                    className="z-20"
                  />
                </div>
                <div className="absolute bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <img src="assets/images/home/light-location.png" alt="" />
                </div>
              </div>
              <div className="flex justify-between mb-3 text-main-color pb-3 px-3">
                <div className="">
                  <img
                    src="assets/images/home/heart-icon.png"
                    alt=""
                    className="inline-block"
                  />
                  <span className="secondary-color font-medium text-xs">
                    326
                  </span>
                </div>
                <div className="secondary-color font-medium text-xs">
                  23 <span className="font-normal">comments</span>
                </div>
              </div>
              <div className="border-b w-11/12 mx-auto my-3"></div>
              <div className="flex secondary-color text-xs px-3">
                <div className="w-1/4">
                  <div className="text-center">
                    <img
                      src="assets/images/home/heart-icon-light.png"
                      className="mx-auto mb-2"
                      alt=""
                    />
                    <div className="">Like</div>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="text-center">
                    <img
                      src="assets/images/home/chat-icon.png"
                      className="mx-auto mb-2"
                      alt=""
                    />
                    <div className="">Comment</div>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="text-center">
                    <img
                      src="assets/images/home/share-icon.png"
                      className="mx-auto mb-2"
                      alt=""
                    />
                    <div className="">Send</div>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="text-center">
                    <img
                      src="assets/images/home/pin-icon.png"
                      className="mx-auto mb-2"
                      alt=""
                    />
                    <div className="">Save</div>
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
