import React, { useRef, useState } from "react";
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
  IonModal,
  IonList,
  IonItem,
  IonButton,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import CreateExperience from "./CreateExperience";
import { Storage } from "@capacitor/storage";

const MY_EXPERIENCE = "MYEXPERIENCE";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const [openExperience, setOpenExperience] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const experienceModal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="container-mx-auto">
          <div className="content-Experience">
            <div className="bg-white px-3 pt-8 pb-2 shadow-md rounded-b-xl">
              <div className="flex justify-between">
                <div></div>
                <div>Groups</div>
                <div>
                  <img src="/assets/images/Groups/user-plus.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col mx-4">
              <div className="mt-5">
                <img
                  src="/assets/images/Groups/Rio de Janeiro-bro 1.png"
                  alt=""
                />
              </div>
              <h1 className="font-bold my-3">No experience</h1>
              <div className="text-center text-sm px-6 mb-3 secondary-color">
                You don't have any experience yet, you can create a new one now
                just plan your future experience
              </div>
              <div>
                <button
                  className="bg-main-color text-white rounded-lg mt-3 mx-5 py-2 px-20 text-sm flex items-center justify-center"
                  id="open-modal"
                >
                  <img
                    src="/assets/images/Groups/PlusCircle.png"
                    alt=""
                    className="mr-2"
                  />
                  Add Experience
                </button>
              </div>
            </div>
          </div>
        </div>
        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
        >
          <IonContent>
            <IonList>
              <IonItem>Add</IonItem>
              <IonItem
                id="open-create-experience-modal"
                onClick={() => {
                  modal.current?.dismiss();
                  Storage.set({ key: MY_EXPERIENCE, value: "" });

                  setTimeout(() => {
                    setOpenExperience(true);
                  }, 800);
                }}
              >
                New Experience
              </IonItem>
              <IonItem>Upload from Archive</IonItem>
              <IonItem>Plan Experiences</IonItem>
            </IonList>
          </IonContent>
        </IonModal>
        <IonModal isOpen={openExperience}>
          <CreateExperience setOpen={setOpenExperience} />
        </IonModal>
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
