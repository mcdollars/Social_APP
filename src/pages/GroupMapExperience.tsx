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
            <div>
              <img src="/assets/images/Groups/world.png" alt="" />
            </div>
            <div className="flex justify-between px-3 items-center pt-8 pb-3 bg-white rounded-t-xl fixed bottom-0 w-full">
              <div className="text-center">
                <div className="font-bold">10</div>
                <div>Countries</div>
              </div>
              <div className="text-center">
                <div className="font-bold">23</div>
                <div>Cities</div>
              </div>
              <div className="text-center">
                <div className="font-bold">30</div>
                <div>Experiences</div>
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
