import React from "react";
import {
  IonContent,
  IonPage,
  IonToggle,
  useIonRouter,
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
  const router = useIonRouter()

  const goBack = () => {
    setTimeout(() => {
      router.push("/create-plan-experience", "root", "pop");
    }, 800);
  };
  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="container experience-settings">
          <div className="flex justify-between items-center pt-4 pb-2 px-2 shadow-md rounded-b-md">
            <div className="w-20" onClick={goBack}>
              <img src="assets/images/discover/back.png" alt="" />
            </div>
            <span className="text-sm grow font-medium">Advanced settings</span>
          </div>
          <div className="text-sm px-4 mt-4">
            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Allow suggestions</span>
                <div>
                  <IonToggle color="success"/>
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
                  <IonToggle color="success"/>
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
                  <IonToggle color="success"/>
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
