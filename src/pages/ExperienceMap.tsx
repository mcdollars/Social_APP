import React, { useState, useRef } from "react";
import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  useIonRouter,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import { add } from 'ionicons/icons'
import * as selectors from "../data/selectors";
import SearchPlaces from './SearchPlaces'

interface OwnProps {
  setOpen: any;
}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ setOpen }) => {
  const [openSearchPlaces, setOpenSearchPlaces] = useState<boolean>(false)

  const modal = useRef<HTMLIonModalElement>(null)
  const router = useIonRouter()
  
  const handleAddClick = () => {
    modal.current?.dismiss()
    setTimeout(() => {
      setOpenSearchPlaces(true)
    }, 800)
  }

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div
          style={{ backgroundColor: "#91c5dc" }}
          className="container experience-settings"
        >
          <div className="pt-4 pb-2 px-2 shadow-md rounded-b-md bg-white">
            <div className="flex justify-between items-center">
              <div onClick={() => setOpen(false)}>
                <img src="assets/images/discover/back.png" alt="" />
              </div>
              <div className="flex items-center">
                <div>
                  <img src="assets/images/experiences/Ellipse 38.png" alt="" />
                </div>
                <span className="px-1">Girls trip</span>
                <div>
                  <img
                    className="w-5"
                    src="assets/images/experiences/Edit Square.png"
                    alt=""
                  />
                </div>
              </div>
              <span className="-mt-2 text-lg">...</span>
            </div>
            <div className="flex overflow-x-scroll mt-3">
              <a
                href="#"
                className="flex-none flex items-center justify-center bg-lines-color px-4 py-2 rounded-full mr-2"
              >
                <img
                  className="mr-2 w-4"
                  src="assets/images/experiences/Info.png"
                  alt=""
                />
                Details
              </a>
              <a
                href="#"
                className="flex-none flex items-center justify-center bg-lines-color px-4 py-2 rounded-full mr-2"
              >
                <img
                  className="mr-2 w-4"
                  src="assets/images/experiences/ChatCenteredDots.png"
                  alt=""
                />
                Suggestions
              </a>
              <a
                href="#"
                className="flex-none flex items-center justify-center bg-lines-color px-4 py-2 rounded-full"
              >
                <img
                  className="mr-2 w-4"
                  src="assets/images/experiences/BookmarkSimple.png"
                  alt=""
                />
                Saved Place
              </a>
            </div>
          </div>
          <div className="text-sm px-4 mt-4">
            <div className="flex justify-center mt-20 relative">
              <img src="assets/images/experiences/Vector.png" alt="" />
              <span
                style={{ top: "35%", left: "4%" }}
                className="absolute text-5xl"
              >
                ISRAEL
              </span>
            </div>
          </div>
        </div>
        <div>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton
              onClick={handleAddClick}
            >
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </div>
        <IonModal isOpen={openSearchPlaces}>
          <SearchPlaces setOpen={setOpenSearchPlaces}/>
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
