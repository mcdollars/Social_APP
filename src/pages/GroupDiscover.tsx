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
        <div className="bg-background-color">
          <div className="container-mx-auto">
            <div className="content-discover-group">
              <div className="w-full shadow-md rounded-b-lg bg-white">
                <div className="flex justify-between p-3">
                  <div>
                    <img src="/assets/images/discover/back.png" alt="" />
                  </div>
                  <div>discover</div>
                  <div></div>
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
              <div className="bg-white rounded-b-xl mt-1 mb-6 pb-6 shadow-sm">
                <div className="text-main-color p-4">Recommended for you</div>
                <div className="text-gray-color p-4">
                  Groups with similar interests
                </div>
                <div className="flex justify-center flex-col mx-3 drop-shadow">
                  <img src="/assets/images/Groups/Rectangle 15.png" alt="" />
                  <div className="my-2">Your Crete</div>
                  <div className="text-gray-color">
                    200 members - 4 experinces
                  </div>
                  <button className="bg-main-color text-white rounded-xl mt-3 mx-5 py-2 flex items-center justify-center">
                    <img
                      src="/assets/images/Groups/PlusCircle.png"
                      alt=""
                      className="mr-2"
                    />
                    Join the group
                  </button>
                </div>
              </div>
              <div>
                <div className="flex mt-3 justify-between mx-3">
                  <div className="flex">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div>Best travel advices</div>
                      <div className="text-gray-color text-sm">100 members</div>
                    </div>
                  </div>
                  <div>
                    <button className="bg-main-color px-8 text-sm py-1 rounded-3xl text-white">
                      Join
                    </button>
                  </div>
                </div>
                <div className="flex mt-4 justify-between mx-3">
                  <div className="flex">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14-0.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div>Thailand</div>
                      <div className="text-gray-color text-sm">100 members</div>
                    </div>
                  </div>
                  <div>
                    <button className="bg-main-color px-8 text-sm py-1 rounded-3xl text-white">
                      Join
                    </button>
                  </div>
                </div>
                <div className="flex mt-4 justify-between mx-3">
                  <div className="flex">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div>Bali</div>
                      <div className="text-gray-color text-sm">100 members</div>
                    </div>
                  </div>
                  <div>
                    <button className="bg-main-color px-8 text-sm py-1 rounded-3xl text-white">
                      Join
                    </button>
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
