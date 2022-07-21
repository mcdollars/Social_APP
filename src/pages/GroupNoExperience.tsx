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
          <div className="content-Experience">
            <div className="bg-white px-3 pt-8 pb-2 shadow-md rounded-b-xl">
              <div className="flex justify-between">
                <div></div>
                <div>Groups</div>
                <div>
                  <img src="/assets/images/Groups/user-plus.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col mx-4">
              <div className="mt-5">
                <img
                  src="/assets/images/Groups/Rio de Janeiro-bro 1.png"
                  alt=""
                />
              </div>
              <h1 className="font-bold my-3">No experience</h1>
              <div className="text-center text-sm px-6 mb-3 secondary-color">
                You don't have any experience yet, you can create a new one now
                just plan your future experience
              </div>
              <div>
                <button className="bg-main-color text-white rounded-lg mt-3 mx-5 py-2 px-20 text-sm flex items-center justify-center">
                  <img
                    src="/assets/images/Groups/PlusCircle.png"
                    alt=""
                    className="mr-2"
                  />
                  Add Experience
                </button>
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
                  <div className="absolute bg-main-color h-1 w-12 rounded-full top-0 left-0 translate-x-1/3"></div>
                </div>

                <div className="w-1/5 relative pb-6 pt-4">
                  <div className="">
                    <img
                      src="assets/images/Groups/Users.png"
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
