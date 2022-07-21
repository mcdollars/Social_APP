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
          <div className="content-your-groups">
            <div className="w-full shadow-md rounded-b-lg bg-white">
              <div className="flex justify-between p-3">
                <div>
                  <img src="/assets/images/discover/back.png" alt="" />
                </div>
                <div>My groups</div>
                <div></div>
              </div>
            </div>
            <div className="p-5">
              <div className="my-3">Groups you manage</div>
              <div className="flex">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14.png"
                  alt=""
                />
                <div className="ml-4">
                  <div>Best travel advices</div>
                  <div className="text-gray-color">100 members</div>
                </div>
              </div>
              <div className="my-3">Other</div>
              <div className="flex mt-4">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14-0.png"
                  alt=""
                />
                <div className="ml-4">
                  <div>Thailand</div>
                  <div className="text-gray-color">100 members</div>
                </div>
              </div>
              <div className="flex mt-4">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14-1.png"
                  alt=""
                />
                <div className="ml-4">
                  <div>Bali</div>
                  <div className="text-gray-color">100 members</div>
                </div>
              </div>
              <div className="flex mt-4">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14-2.png"
                  alt=""
                />
                <div className="ml-4">
                  <div>Travel Buddy</div>
                  <div className="text-gray-color">12 members</div>
                </div>
              </div>
              <div className="flex mt-4">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14-3.png"
                  alt=""
                />
                <div className="ml-4">
                  <div>Cooocking Recipe</div>
                  <div className="text-gray-color">32 members</div>
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
