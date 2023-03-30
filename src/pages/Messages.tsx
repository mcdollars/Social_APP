import React, { useState, useRef } from "react";
import {
  IonFabButton,
  IonFab,
  IonIcon,
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonInput,
  IonLabel
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import { add, browsers } from 'ionicons/icons'

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const [openMessageModal, setOpenMessageModal] = useState<boolean>(false)
  const modal = useRef<HTMLIonModalElement>(null)

  return (
    <div>
      <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
        <div className="flex grow">
          <div className="mr-2">
            <img src="assets/images/82-90/bg4.png" alt="" />
          </div>
          <div className="flex flex-col grow">
            <span className="text-sm font-medium">Michael Palmer</span>
            <span className="secondary-color text-xs flex-wrap mt-1">
              Let’s meet in 15 minutes in Mama's Tacos at the South Beach?
            </span>
          </div>
        </div>
        <div className="w-20">
          <p style={{ fontSize: "12px" }} className="text-gray-color">
            04:12 PM
          </p>
        </div>
      </div>

      <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
        <div className="flex grow">
          <div className="mr-2">
            <img src="assets/images/82-90/bg4.png" alt="" />
          </div>
          <div className="flex flex-col grow">
            <span className="text-sm font-medium">Beverly Douglas</span>
            <div className="secondary-color text-xs mt-1 flex items-center">
              <div className="mr-2">
                <img src="assets/images/82-90/audio.png" alt="" />
              </div>
              <p>Sent a voice message</p>
            </div>
          </div>
        </div>
        <div className="w-20 flex flex-col items-center">
          <span style={{ fontSize: "12px" }} className="text-gray-color">
            03:50 PM
          </span>
          <div className="mt-2">
            <img src="assets/images/82-90/badge.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
        <div className="flex grow">
          <div className="mr-2">
            <img src="assets/images/82-90/bg3.png" alt="" />
          </div>
          <div className="flex flex-col grow">
            <span className="text-sm font-medium">Douglas Simpson</span>
            <span className="secondary-color text-xs flex-wrap mt-1">
              Ok, no problem I can call you back
            </span>
          </div>
        </div>
        <div className="w-20">
          <span style={{ fontSize: "12px" }} className="text-gray-color">
            04:12 PM
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start px-2 mt-3 border-b pb-2">
        <div className="flex grow">
          <div className="mr-2">
            <img src="assets/images/82-90/bg3.png" alt="" />
          </div>
          <div className="flex flex-col grow">
            <span className="text-sm font-medium">Sam Smith</span>
            <span className="secondary-color text-xs flex-wrap mt-1">
              <span className="text-black">You</span> <br />
              Can’t wait to see you
            </span>
          </div>
        </div>
        <div className="w-20">
          <span style={{ fontSize: "12px" }} className="text-gray-color">
            04:12 PM
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
           onClick={() => setOpenMessageModal(true)}
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </div>
      <IonModal 
        ref={modal}
        isOpen={openMessageModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 0.5, 0.75]}
        backdropDismiss={false}
        backdropBreakpoint={0.5}
      >
        <IonHeader>
          <IonToolbar>
            <div className="mr-2 w-6">
              <img
                className="w-full"
                src="assets/images/82-90/close.png"
                alt=""
                onClick={() => setOpenMessageModal(false)}
              />
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput
          //  list="browsers"
            placeholder="Find your friend"
          >
            <IonLabel>Browsers</IonLabel>
            <datalist id="browsers">
              <option value="inter"></option>
              <option value="inter1"></option>
              <option value="inter2"></option>
              <option value="inter3"></option>
              <option value="inter4"></option>
            </datalist>
          </IonInput>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  // mapStateToProps: (state) => ({
  //   // speakers: selectors.getGroups(state),
  //   // speakerSessions: selectors.getSpeakerSessions(state),
  // }),
  component: React.memo(Groups),
});
