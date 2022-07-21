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
          <div className="flex items-center p-2 shadow-md rounded-b-md">
            <a className="w-8" href="#">
              <img src="assets/images/discover/close.png" alt="" />
            </a>
            <span className="text-sm text-center grow">New Experience</span>
          </div>
          <div className="text-xs px-4 mt-4">
            <div>
              <div className="mt-5">
                <div className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src="assets/images/experiences/MapPinLine.png"
                    alt=""
                  />
                  <span className="font-bold secondary-color">
                    Place for your experience
                  </span>
                </div>
                <div>
                  <input
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                    type="text"
                    placeholder="Ex: Miami"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src="assets/images/experiences/Notebook.png"
                    alt=""
                  />
                  <span className="font-bold secondary-color">
                    Experience Name
                  </span>
                </div>
                <div>
                  <input
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                    type="text"
                    placeholder="(optional)"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-base">My trip public</span>
                  <div>
                    <img src="assets/images/Groups/Controls.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a
                  className="w-4/5 mx-auto text-center block bg-lines-color py-3 text-gray-color text-base font-bold rounded-lg"
                  href="#"
                >
                  Add Experience
                </a>
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
