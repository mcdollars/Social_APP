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
          <div className="content-group1">
            <div className="w-full shadow-md rounded-b-lg bg-white">
              <div className="flex justify-between p-3">
                <div>
                  <img src="/assets/images/Groups/close.png" alt="" />
                </div>
                <div>Beaches</div>
                <div className="flex items-center">
                  <h2 className="ml-2 main-color">Create group</h2>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-lines-color flex justify-center rounded-2xl">
                <div className="bg-white px-6 py-4 m-24 flex rounded-2xl">
                  <img src="/assets/images/Groups/image.png" alt="" />
                  <p className="ml-2 w-44">Upload group image</p>
                </div>
              </div>
            </div>
            <form action="" className="ml-4">
              <div className="my-4">
                <label className="block my-4">Group Name</label>
                <input
                  type="text"
                  placeholder="Ex: My Experience"
                  className="border-1-gray p-2"
                />
              </div>
              <div className="my-4">
                <label className="block my-4">Description</label>
                <textarea
                  className="resize-none rounded-md p-3"
                  name=""
                  id=""
                  cols={30}
                  rows={5}
                  placeholder="Short description about your group"
                ></textarea>
              </div>
              <div>
                <label htmlFor="" className="block my-4">
                  Interests
                </label>
                <div className="flex border-b">
                  <img src="/assets/images/Groups/plus.png" alt="" />
                  <div className="main-color ml-3">Add Interests</div>
                </div>
              </div>
              <div>
                <label htmlFor="" className="block mt-3">
                  Privacy
                </label>
                <select name="" id="" className="text-gray-color my-3 p-2">
                  <option value="Select Provacy">Select Provacy</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <div>Members can add maps to group</div>
                <div className="mr-3">
                  <img src="/assets/images/Groups/Controls.png" alt="" />
                </div>
              </div>
            </form>
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
