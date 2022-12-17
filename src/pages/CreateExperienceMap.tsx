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
import { App } from "@capacitor/app";
import "./CreateExperienceMap.scss";

import { isPlatform } from "@ionic/react";

import {
  Camera,
  CameraDirection,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";
import { decode } from "base64-arraybuffer";
import moment from "moment";
import { useParams } from "react-router";
import { all } from "../helpers/Experiences";

const PHOTO_STORAGE = "photos";
const MY_EXPERIENCE = "MYEXPERIENCE";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

interface GroupsProps extends OwnProps, StateProps, DispatchProps, UserPhoto {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const params: any = useParams();
  let leafletMap: any;
  const lat: number = 41.1533;
  const lng: number = 20.1683;
  const zoom: number = 8;

  const router = useIonRouter();
  const [openOption, setOptionOption] = useState(false);
  const [experience, setExperience] = useState([]);
  const modal = useRef<HTMLIonModalElement>(null);
  const [markerPosition, setMarkerPosition] = useState<any>();

  React.useEffect(() => {
    if (params) {
      all(params.id)
        .then(({ experiences }) => {
          setExperience(experiences);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const goBack = () => {
    if (router.canGoBack()) {
      router.goBack();
    } else {
      router.push("/tabs/create-experience-activity", "back", "push");
    }
  };

  function blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject("method did not return a string");
        }
      };
      reader.readAsDataURL(blob);
    });
  }

  const savePicture = async (
    photo: Photo,
    fileName: string
  ): Promise<UserPhoto> => {
    let base64Data: string;
    // "hybrid" will detect Cordova or Capacitor;
    if (isPlatform("hybrid")) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform("hybrid")) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      quality: 80,
      allowEditing: false,
      saveToGallery: true,
      // direction: CameraDirection.Rear,
      // source: CameraSource.Camera,
    });

    // const fileName = new Date().getTime() + ".jpeg";
    // const savedFileImage = await savePicture(photo, fileName);
    // const newPhotos = [savedFileImage, ...photos];
    // setPhotos(newPhotos);

    await Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photo),
    });

    let myExperience: any = await Preferences.get({ key: MY_EXPERIENCE });
    let val: any = JSON.parse(myExperience.value);

    val.photos.push(photo);

    await Preferences.set({
      key: MY_EXPERIENCE,
      value: JSON.stringify({ ...val, markerPosition }),
    });
    /*

    const blob = new Blob(
      [new Uint8Array(decode(photo.base64String as string))],
      {
        type: `image/${photo.format}`,
      }
    );

    const imgName = new Date().toISOString();

    const file = new File([blob], `${imgName}.${blob.type}`, {
      lastModified: moment().unix(),
      type: blob.type,
    });


    Storage.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(await blobToBase64(blob)),
    });

    let myExperience: any = await Storage.get({ key: MY_EXPERIENCE });
    let val: any = JSON.parse(myExperience.value);

    val.photos.push(await blobToBase64(blob));

    Storage.set({
      key: MY_EXPERIENCE,
      value: JSON.stringify({ ...val, markerPosition }),
    });

    */
    setTimeout(() => {
      router.push("/create-experiences-activity", "root", "pop");
    }, 800);
  };

  React.useEffect(() => {
    const loadMap = async () => {
      leafletMap = new L.Map("map");
      leafletMap.on("load", () => {
        setTimeout(() => {
          leafletMap.invalidateSize();
        }, 10);
      });

      leafletMap.setView([lat, lng], zoom);
      let myIcon = L.icon({
        iconUrl: "assets/images/location-pin.png",
        iconSize: [40, 40],
      });

      let marker = new L.Marker([lat, lng], {
        icon: myIcon,
        draggable: true,
        title: "My Experience",
        interactive: true,
      });

      marker.addTo(leafletMap);

      leafletMap.on("click", (data: any) => {
        marker.setLatLng(data.latlng);
        setMarkerPosition({ lat: data.latlng.lat, lng: data.latlng.lng });
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(leafletMap);
    };

    if (params) {
      all(params.id)
        .then(({ experiences }) => {
          if (experiences && experiences.length > 0) {
            console.log({ experiences });
            experiences.map((experience: any) => {
              const icon = L.divIcon({
                html: `<div class="fixed">
          <div class="p-2 bg-white rounded-full relative">
            <img class="rounded-full" style="width:100%; height:100%;" src="${experience.photos[0].webPath}" alt="${experience.name}" />
          </div>
          <div class="p-2 bg-white rounded-xl -mt-2">${experience.post} </div>
          </div>`,
              });

              const mark: any = new L.Marker(experience.markerPosition, {
                icon,
                title: experience.post,
                interactive: true,
              });

              mark.addTo(leafletMap);
            });
          }
        })
        .catch((err) => console.log(err));
    }

    loadMap().catch(console.error);
  }, []);

  /*
  React.useEffect(() => {
    if (params) {
      all(params.id)
        .then(({ experiences }) => {
          const loadMap = async () => {
            leafletMap = new L.Map("map");
            leafletMap.on("load", () => {
              setTimeout(() => {
                leafletMap.invalidateSize();
              }, 10);
            });

            leafletMap.setView([lat, lng], zoom);
            let myIcon = L.icon({
              iconUrl: "assets/images/location-pin.png",
              iconSize: [40, 40],
            });

            let marker = new L.Marker([lat, lng], {
              icon: myIcon,
              draggable: true,
              title: "My Experience",
              interactive: true,
            });

            marker.addTo(leafletMap);

            leafletMap.on("click", (data: any) => {
              marker.setLatLng(data.latlng);
              setMarkerPosition({ lat: data.latlng.lat, lng: data.latlng.lng });
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(leafletMap);

            if (experiences && experiences.length > 0) {
              experiences.map((experience: any) => {
                const icon = L.divIcon({
                  html: `<div class="fixed">
          <div class="p-2 bg-white rounded-full relative">
            <img class="rounded-full" style="width:100%; height:100%;" src="${experience.photos[0].webPath}" alt="${experience.name}" />
          </div>
          <div class="p-2 bg-white rounded-xl -mt-2">${experience.name} </div>
          </div>`,
                });

                const mark: any = new L.Marker(experience.markerPosition, {
                  icon,
                  title: experience.post,
                  interactive: true,
                });

                mark.addTo(leafletMap);
              });
            }
          };

          loadMap().catch(console.error);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  */

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
                  <IonFabButton
                    color="primary"
                    title="Add Photo"
                    onClick={takePhoto}
                  >
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
