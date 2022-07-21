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
          <div className="content-plan">
            <div className="w-full shadow-md rounded-b-lg bg-white">
              <div className="flex justify-between items-center p-3">
                <div>
                  <img src="/assets/images/discover/close.png" alt="" />
                </div>
                <div>Plan experience</div>
                <div className="bg-lines-color py-1 px-3 text-gray-color text-sm font-medium rounded-3xl">
                  Next
                </div>
              </div>
              <div className="relative p-4">
                <input
                  type="text"
                  className="text-gray-color text-sm border w-full py-2 indent-10 rounded-md"
                  placeholder="Search for country or city"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-4 translate-x-full">
                  <img src="assets/images/discover/search.png" alt="" />
                </div>
              </div>
            </div>
            <img src="/assets/images/Groups/world (1).png" alt="" />
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
