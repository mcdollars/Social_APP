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
          <div className="content-inviteparticipants">
            <div className="w-full shadow-md rounded-b-lg bg-white">
              <div className="flex justify-between p-3">
                <div>
                  <img src="/assets/images/discover/back.png" alt="" />
                </div>
                <div>My groups</div>
                <div className="text-main-color">Done</div>
              </div>
              <div className="relative p-4">
                <input
                  type="text"
                  className="text-gray-color text-sm border w-full py-2 indent-10 rounded-md"
                  placeholder="Search places, people, categories"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-4 translate-x-full">
                  <img src="assets/images/discover/search.png" alt="" />
                </div>
              </div>
            </div>
            <div className="p-4">
              Add some people who you like to have in the group.
              <br />
              You can add people lalter too.
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25.png" alt="" />
                <div className="ml-5">Wade Warren</div>
              </div>
              <button className="bg-lines-color py-1 px-6 text-sm rounded-3xl text-main-color">
                Undo
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-1.png" alt="" />

                <div className="ml-5">Dianne Russell</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-2.png" alt="" />
                <div className="ml-5">Theresa Webb</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-3.png" alt="" />
                <div className="ml-5">Wade Warren</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-4.png" alt="" />
                <div className="ml-5">Darlene Robertson</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-5.png" alt="" />
                <div className="ml-5">Arlene McCOy</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-6.png" alt="" />
                <div className="ml-5">Devon Lane</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-7.png" alt="" />
                <div className="ml-5">Courtney Henry</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <img src="/assets/images/Groups/Ellipse 25-8.png" alt="" />
                <div className="ml-5">Wade Warren</div>
              </div>
              <button className="bg-main-color py-1 px-6 text-sm rounded-3xl text-white">
                Invite
              </button>
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
