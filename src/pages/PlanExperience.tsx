import React, { useState, useEffect, useRef } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButton,
  IonSearchbar,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import { runInThisContext } from "vm";
import CreatePlanExperience from './CreatePlanExperience'

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
  const [filterText, setFilterText] = useState<string>("")
  const [nextDisable, setNextDisable] = useState<boolean>(true)
  const [openCreatePlanExperience, setOpenCreatePlanExperience] = useState<boolean>(false)
  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    filterText ? setNextDisable(false) : setNextDisable(true)
  }, [filterText])

 
  const handleNextClick = () => {
    modal.current?.dismiss()
    setTimeout(() => {
      setOpenCreatePlanExperience(true)
    }, 800)
  }
  
  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="container-mx-auto">
          <div className="content-plan">
            <div className="w-full shadow-md rounded-b-lg bg-white">
              <div className="flex justify-between items-center p-3">
                <span className="w-8" onClick={() => setOpen(false)}>
                  <img src="assets/images/discover/close.png" alt="" />
                </span>
                <div>Plan experience</div>
                <div className="py-1 px-3 text-gray-color text-sm font-medium">
                  <IonButton 
                    shape="round" 
                    disabled={nextDisable}
                    onClick={(e) => handleNextClick()}
                  >
                    Next
                  </IonButton>
                </div>
              </div>
              <div className="relative p-4">
                <IonSearchbar
                  placeholder="Search for country or city" 
                  color = "light"
                  value={filterText}
                  onIonChange ={(e) => setFilterText(e.detail.value!)}
                />
              </div>
            </div>
            <img src="/assets/images/Groups/world (1).png" alt="" />
          </div>
        </div>
        <IonModal isOpen={openCreatePlanExperience}>
          <CreatePlanExperience setOpen={setOpenCreatePlanExperience} />
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
