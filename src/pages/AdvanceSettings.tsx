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
          <div className="flex justify-between items-center pt-4 pb-2 px-2 shadow-md rounded-b-md">
            <div className="w-20">
              <img src="assets/images/discover/back.png" alt="" />
            </div>
            <span className="text-sm grow font-medium">Advanced settings</span>
          </div>
          <div className="text-sm px-4 mt-4">
            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Allow suggestions</span>
                <div>
                  <img src="assets/images/Groups/Controls.png" alt="" />
                </div>
              </div>
              <div className="mt-2 text-gray-color text-xs">
                Allow a friend to send a suggestion which populates your map.
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Receive “Feed” updates</span>
                <div>
                  <img src="assets/images/Groups/Controls.png" alt="" />
                </div>
              </div>
              <div className="mt-2 text-gray-color text-xs">
                You will see posts in your home screen from people who have
                visited that same city recently.
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Itinerary</span>
                <div>
                  <img src="assets/images/Groups/Controls.png" alt="" />
                </div>
              </div>
              <div className="mt-2 text-gray-color text-xs">
                Allow to create an itinerary for experience, so Monday 5,
                Activity A, Tuesday at 6, activity B.
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
