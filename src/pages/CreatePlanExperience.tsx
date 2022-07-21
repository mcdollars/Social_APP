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
          <div className="flex justify-between items-center p-2 shadow-md rounded-b-md">
            <a className="text-gray-color font-medium text-xs" href="#">
              Cancel
            </a>
            <span className="text-sm">Plan new experience</span>
            <span className="bg-lines-color py-1 px-2 text-gray-color rounded-full text-xs">
              Create
            </span>
          </div>
          <div className="text-sm px-4 mt-4">
            <div>
              <div>
                <div className="flex">
                  <img
                    className="w-4 mr-2"
                    src="assets/images/experiences/Notebook.png"
                    alt=""
                  />
                  <span className="font-medium secondary-color">
                    Experience Name
                  </span>
                </div>
                <div>
                  <input
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                    type="text"
                    placeholder="Ex: Vacation in..."
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex">
                  <img
                    className="w-5 mr-2"
                    src="assets/images/discover/integration.png"
                    alt=""
                  />
                  <span className="font-medium secondary-color">
                    Location Name
                  </span>
                </div>
                <div>
                  <input
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                    type="text"
                    placeholder="Ex: Country name"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex">
                  <img
                    className="w-5 mr-2"
                    src="assets/images/experiences/Users.png"
                    alt=""
                  />
                  <span className="font-medium secondary-color">
                    Invite open to
                  </span>
                </div>
                <div>
                  <div
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg flex justify-between items-center"
                    // type="text"
                    placeholder="Ex: Country name"
                  >
                    <span>Private</span>
                    <div>
                      <img src="assets/images/experiences/Shape.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Date is defined</span>
                  <div>
                    <img src="assets/images/Groups/Controls.png" alt="" />
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <a className="main-color" href="#">
                    Advanced settings
                  </a>
                  <div>
                    <img src="assets/images/experiences/Shape.png" alt="" />
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
