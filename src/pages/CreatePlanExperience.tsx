import React, { useState, useEffect, useRef } from "react";
import {
  IonButton,
  IonContent,
  IonPage,
  IonToggle,
  IonModal,
  useIonRouter,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import ExperienceMap from './ExperienceMap';

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
  const [isDateDefined, setIsDateDefined] = useState<boolean>(false)
  const [experienceName, setExperienceName] = useState<string>("")
  const [countryName, setCountryName] = useState<string>("")
  const [createDisabled, setCreateDisabled] = useState<boolean>(true)
  const [openExperienceMap, setOpenExperienceMap] = useState<boolean>(false)

  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    if (experienceName != "" && countryName != "") {
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
                    <IonToggle
                      color="success"
                      checked={isDateDefined}
                      onChange={() => setIsDateDefined(!isDateDefined)}
                    />
                  </div>
                </div>
              </div>
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
        <IonModal isOpen={openExperienceMap}>
          <ExperienceMap setOpen={setOpenExperienceMap} />
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
