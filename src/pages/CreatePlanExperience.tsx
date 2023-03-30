import React, { useState, useEffect, useRef } from "react";
import {
  IonButton,
  IonContent,
  IonPage,
  IonToggle,
  IonModal,
  useIonRouter,
  IonItem,
  IonList,
  IonIcon,
  IonLabel,
  IonDatetime,
  IonButtons,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import ExperienceMap from './ExperienceMap';
import { earth, peopleCircle, lockClosed, calendar, constructOutline} from 'ionicons/icons'

interface OwnProps {
  setOpen: any;
}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps { }

interface GroupsProps extends OwnProps, StateProps, DispatchProps { }

const Groups: React.FC<GroupsProps> = ({ setOpen }) => {
  const [experienceName, setExperienceName] = useState<string>("")
  const [countryName, setCountryName] = useState<string>("")
  const [createDisabled, setCreateDisabled] = useState<boolean>(true)
  const [openExperienceMap, setOpenExperienceMap] = useState<boolean>(false)
  const [openInviteOptionModal, setOpenInviteOptionModal] = useState<boolean>(false)
  const [openDateInput, setOpenDateInput] = useState<boolean>(false)
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)
  const [date, setDate] = useState<string>('')

  const modal = useRef<HTMLIonModalElement>(null);
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  const handleInviteDone = () => {

  }

  useEffect(() => {
    if (experienceName !== "" && countryName !== "") {
      setCreateDisabled(false)
    } else {
      setCreateDisabled(true)
    }
  }, [experienceName, countryName])

  const router = useIonRouter()

  const handleCreate = () => {
    modal.current?.dismiss()
    setTimeout(() => {
      setOpenExperienceMap(true)
    }, 800)
  }

  const handleAdvanceSetting = () => {
    modal.current?.dismiss()
    setTimeout(() => {
      
    }, 800)
  }

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="container experience-settings">
          <div className="flex justify-between items-center p-2 shadow-md rounded-b-md">
            <a
              className="text-gray-color font-medium text-xs"
              onClick={() => setOpen(false)}
            >
              Cancel
            </a>
            <span className="text-sm">Plan new experience</span>
            <a
              className={`font-medium text-xs text-gray-color ${createDisabled ? '' : 'ion-color-primary'}`}
              onClick={() => handleCreate()}
            >
              Create
            </a>
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
                    value={experienceName}
                    onChange={(e) => setExperienceName(e.target.value)}
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
                    value={countryName}
                    placeholder="Ex: Country name"
                    onChange={(e) => setCountryName(e.target.value)}
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
                    <div 
                      onClick={() => setOpenInviteOptionModal(true)}
                    >
                      <img src="assets/images/experiences/Shape.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Date is defined</span>
                  <div>
                    <IonToggle
                      color="success"
                      checked={openDateInput}
                      onIonChange={() => setOpenDateInput(openDateInput => !openDateInput)}
                    />
                  </div>
                </div>
              </div>
              {openDateInput &&
                <div>
                  <div className="flex">
                    <IonIcon 
                      icon={calendar}
                      className="w-4 mr-2"
                      slot="start"
                    />
                    <span className="font-medium secondary-color">
                      Select date
                    </span>
                  </div>
                  <div>
                    <input
                      className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                      type="text"
                      placeholder="Select"
                      value={date}
                      disabled={true}
                      
                    />
                  </div>
                </div>
              }
              <hr className="mt-4" />
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <a className="main-color"
                  >
                    Advanced settings
                  </a>
                  <div>
                    <IonButton
                      onClick={() => handleAdvanceSetting()}
                    >
                      <img src="assets/images/experiences/Shape.png" alt="" />
                    </IonButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IonModal
          onDidDismiss={() => setOpenInviteOptionModal(false)}
          isOpen={openInviteOptionModal}
          ref={modal}
          // trigger="open-modal"
          initialBreakpoint={0.5}
          breakpoints={[0, 0.25, 0.5, 0.75]}
        >
          <IonContent>
            <IonList>
              <IonItem>
                <div className="flex justify-between items-center p-3">
                  <a
                    className="text-gray-color font-medium text-xs"
                  >
                    <img
                      className="w-full"
                      src="assets/images/82-90/close.png"
                      alt=""
                      onClick={() => setOpenInviteOptionModal(false)}
                    />
                  </a>
                  <span className="text-sm">Invite open to</span>
                  <a
                    className={`font-medium text-xs text-blue-color}`}
                    onClick={handleInviteDone}
                  >
                    Done
                  </a>
                </div>
              </IonItem>
              <IonItem>
                <IonIcon icon={earth} slot="start"/>
                <IonLabel>
                  <h2>Public</h2>
                  <p>Anyone on Dooda</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={peopleCircle} slot="start"/>
                <IonLabel>
                  <h2>Close or selected Friends</h2>
                  <p>Only show to some friends</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={lockClosed} slot="start"/>

                <IonLabel>
                  <h2>Private</h2>
                  <p>Only me</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
        <IonModal isOpen={openExperienceMap}>
          <ExperienceMap setOpen={setOpenExperienceMap} />
        </IonModal>
        <IonModal isOpen={openDatePicker}>
          <IonDatetime ref={datetime}/>
          <IonButtons slot="buttons">
            <IonButton>Cancel</IonButton>
            <IonButton>Save</IonButton>
          </IonButtons>
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
