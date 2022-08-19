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
  useIonRouter,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonModal,
  IonList,
  IonItem,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import * as L from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { add, camera, bookmark, star } from "ionicons/icons";
import "./CreateExperienceMap.scss";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  let leafletMap: any;
  const lat: number = 41.1533;
  const lng: number = 20.1683;
  const zoom: number = 8;

  const router = useIonRouter();
  const [openOption, setOptionOption] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const goBack = () => {
    if (router.canGoBack()) {
      router.goBack();
    }
  };

  const loadMap = () => {
    leafletMap = new L.Map("map");
    leafletMap.on("load", () => {
      setTimeout(() => {
        leafletMap.invalidateSize();
      }, 10);
    });
    leafletMap.setView([lat, lng], zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(leafletMap);
  };

  React.useEffect(() => {
    loadMap();
  }, []);

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div
          style={{ backgroundColor: "#91c5dc" }}
          className="container experience-settings"
        >
          <div className="flex justify-between items-center p-2 shadow-md rounded-b-lg bg-white">
            <span className="w-8" onClick={goBack}>
              <img src="assets/images/discover/back.png" alt="" />
            </span>
            <div
              className="text-sm text-center flex justify-center items-center border border-slate-200 py-1 px-4 rounded-full"
              id="open-modal-options"
            >
              <span className="mr-1 text-xs font-medium">Thai Vacation</span>
              <div>
                <img src="assets/images/experiences/Edit Square.png" alt="" />
              </div>
            </div>
            <div>
              <img src="assets/images/61/Rectangle 302.png" alt="" />
            </div>
          </div>

          <div>
            <div>
              <div
                id="map"
                className="bg-blue-300"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "absolute",
                }}
              ></div>
            </div>
            <div>
              <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton>
                  <IonIcon icon={add} />
                </IonFabButton>
                <IonFabList side="top">
                  <IonFabButton color="primary" title="Add Photo">
                    <IonIcon icon={camera} />
                  </IonFabButton>
                  <IonFabButton color="secondary" title="Saved Places">
                    <IonIcon icon={bookmark} />
                  </IonFabButton>
                  <IonFabButton
                    color="primary"
                    title="Most Popular"
                    onClick={() => {
                      setTimeout(() => {
                        router.push(
                          "/popular-experiences-map",
                          "forward",
                          "push"
                        );
                      }, 100);
                    }}
                  >
                    <IonIcon icon={star} />
                  </IonFabButton>
                </IonFabList>
              </IonFab>
            </div>
          </div>
        </div>
        <IonModal
          ref={modal}
          trigger="open-modal-options"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
        >
          <IonContent>
            <IonList>
              <IonItem>Experience Options</IonItem>
              <IonItem
              // id="open-create-experience-modal"
              // onClick={() => {
              //   modal.current?.dismiss();

              //   setTimeout(() => {
              //     setOpenExperience(true);
              //   }, 800);
              // }}
              >
                Start Experience
              </IonItem>
              <IonItem>Edit Experience</IonItem>
              <IonItem>Delete Experiences</IonItem>
            </IonList>
          </IonContent>
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
