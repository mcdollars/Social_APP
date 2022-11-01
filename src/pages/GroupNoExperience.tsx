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
  useIonRouter,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import CreateExperience from "./CreateExperience";
import { Storage } from "@capacitor/storage";
import { show } from "../helpers/GroupExperiences";

const MY_EXPERIENCE = "MYEXPERIENCE";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const [experiences, setExperiences] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [canDismiss, setCanDismiss] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);

  const modal = useRef<HTMLIonModalElement>(null);
  const experienceModal = useRef<HTMLIonModalElement>(null);

  const router = useIonRouter();

  const openModal = (value: boolean) => {
    setIsOpen(value);
  };

  const showGroupExperience = (id: string) => {
    router.push(`/create-experiences-map/${id}`, "forward", "push");
  };

  React.useEffect(() => {
    show()
      .then(({ groupExperiences }) => {
        setExperiences(groupExperiences);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="container-mx-auto">
          <div className="content-Experience">
            <div className="bg-white px-3 pt-8 pb-2 shadow-md rounded-b-xl">
              <div className="flex justify-between">
                <div></div>
                <div>Experiences</div>
                <div onClick={() => openModal(true)}>
                  <img src="/assets/images/Groups/user-plus.png" alt="" />
                </div>
              </div>
            </div>
            {experiences && experiences.length !== 0 ? (
              <div className="content-Experiences">
                <div className="p-5">
                  <div className="my-3 font-medium">Your Experiences</div>
                  {experiences.map((experience: any) => (
                    <div
                      className="flex mt-2"
                      key={experience.id}
                      onClick={() => showGroupExperience(experience.id)}
                    >
                      <>
                        {experience.experiences &&
                        experience.experiences.length > 0 ? (
                          <>
                            <img
                              className="rounded object-fill h-16 w-16 bg-gray-400"
                              src={experience.experiences[0].photos[0].webPath}
                              alt=""
                            />
                          </>
                        ) : (
                          <div className="rounded object-fill h-16 w-16 bg-gray-400">
                            &nbsp;
                          </div>
                        )}
                        <div className="ml-4">
                          <div className="font-medium">{experience.name}</div>
                          <div className="bg-green-color text-white rounded text-center py-0.5 px-2 w-fit text-sm">
                            Open
                          </div>
                        </div>
                      </>
                    </div>
                  ))}
                  <div className="my-3 font-medium">Planning Experiences</div>
                  <div className="flex mt-4">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14-0.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="font-medium">Crete</div>
                      <div className="text-gray-color text-sm">2 places</div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="font-medium">Santorini</div>
                      <div className="text-gray-color text-sm">2 places</div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14-2.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="font-medium">Mykonos</div>
                      <div className="text-gray-color text-sm">2 places</div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <img
                      className="rounded"
                      src="/assets/images/Groups/Rectangle 14-3.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="font-medium">Zakintos</div>
                      <div className="text-gray-color text-sm">2 places</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col mx-4">
                <div className="mt-5">
                  <img
                    src="/assets/images/Groups/Rio de Janeiro-bro 1.png"
                    alt=""
                  />
                </div>
                <h1 className="font-bold my-3">No experience</h1>
                <div className="text-center text-sm px-6 mb-3 secondary-color">
                  You don't have any experience yet, you can create a new one
                  now just plan your future experience
                </div>
                <div>
                  <button
                    className="bg-main-color text-white rounded-lg mt-3 mx-5 py-2 px-20 text-sm flex items-center justify-center"
                    onClick={() => openModal(true)}
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
            )}
          </div>
        </div>
        <IonModal
          onDidDismiss={() => setIsOpen(false)}
          isOpen={isOpen}
          // ref={modal}
          // trigger="open-modal"
          initialBreakpoint={0.5}
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
                    setIsOpen(false);
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
