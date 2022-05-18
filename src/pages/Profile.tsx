import React, { useEffect, useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonButton,
  IonModal,
} from "@ionic/react";
import "./About.scss";
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faChevronLeft,
  faGlobe,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { fetcCurrenthUser } from "../data/api/auth";

interface AboutProps {}

const Profile: React.FC<AboutProps> = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const interests = [
    { name: "travel" },
    { name: "adventure" },
    { name: "sight seeing" },
  ];

  useEffect(() => {
    const fetch = async () => {
      setCurrentUser(await fetcCurrenthUser());
    };
    fetch();
  }, [setCurrentUser]);

  return (
    <>
      <IonPage>
        <IonContent>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton>
                  <FontAwesomeIcon icon={faCog} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <div className="flex flex-col space-y-4 p-4">
            <div className="flex flex-row justify-between text-center">
              <div>Profile</div>
              <div>
                <div className="font-bold text-xl">12</div>
                Countries
              </div>
              <div>
                <div className="font-bold text-xl">5</div>
                Cities
              </div>
              <div>
                <div className="font-bold text-xl">30</div>
                Experiences
              </div>
            </div>
            <div className="text-2xl">Jade Coleman</div>
            <div className="flex flex-row justify-between">
              <div className="py-2 px-4 border-2 rounded-xl">Travel</div>
              <div className="py-2 px-4 border-2 rounded-xl">Sight Seeing</div>
              <div className="py-2 px-4 border-2 rounded-xl">Adventure</div>
            </div>
            <div>
              Hi, I’m a UI/UX Designer, travelling a lot, looking for a friends
              for travel together.
            </div>
            <div className="flex flex-row justify-between">
              <button
                type="button"
                className="w-full basis-10/12 py-2 bg-gray-200 rounded-lg"
                onClick={() => setShowModal(true)}
              >
                Edit Profile
              </button>
              <button
                type="button"
                className="w-full basis-1/12 py-2 bg-purple-600 rounded-lg text-white"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </button>
            </div>
            <div className="flex flex-row overflow-x-scroll justify-around space-x-2 pl-20">
              <span className="py-2 px-4 border-2 rounded-full bg-gray-200">
                Expereince
              </span>
              <span className="py-2 px-4 border-2 rounded-full bg-gray-200">
                Photos
              </span>
              <span className="py-2 px-4 border-2 rounded-full bg-gray-200">
                Followers
              </span>
              <span className="py-2 px-4 border-2 rounded-full bg-gray-200">
                Following
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 p-4">
            <div className="bg-white p-4 rounded-xl">Test</div>
          </div>

          <IonModal
            isOpen={showModal}
            initialBreakpoint={0.95}
            breakpoints={[0, 0.95, 1]}
            onDidDismiss={() => setShowModal(false)}
          >
            <div className="p-4">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row justify-between pt-4 text-xl">
                  <div
                    className="text-gray-400"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </div>
                  <div>Edit Profile</div>
                  <div
                    className="text-purple-600"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Profile</div>
                  <div>Upload</div>
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    className="w-full border-2 border-gray-400 rounded-xl"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date_of_birth">Date of Birth</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full border-2 border-gray-400 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-2 border-gray-400 rounded-xl"
                    placeholder="(optional)"
                  />
                </div>
                <div>
                  <label htmlFor="about">About you</label>
                  <textarea
                    name="about"
                    className="w-full border-2 border-gray-400 rounded-xl"
                  ></textarea>
                </div>
                <div className="flex flex-row justify-between">
                  <label htmlFor="about" className="inline">
                    Interest
                  </label>
                  <span
                    className="text-purple-600"
                    onClick={() => {
                      setShowModal(false);
                      setTimeout(() => {
                        setShowInterestModal(true);
                      }, 800);
                    }}
                  >
                    {" "}
                    Manage Interest
                  </span>
                </div>
                <div className="flex flex-row space-x-2">
                  {interests &&
                    interests.map((interest) => (
                      <div className="py-2 px-4 bg-gray-300 rounded-full">
                        {interest.name}{" "}
                        <span>
                          <FontAwesomeIcon icon={faClose} />
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </IonModal>
          <IonModal
            isOpen={showInterestModal}
            onDidDismiss={() => setShowInterestModal(false)}
          >
            <>
              <div className="p-4 border-gray-200 border-b-2">
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-row justify-between">
                    <span
                      onClick={() => {
                        setShowInterestModal(false);
                        setTimeout(() => {
                          setShowModal(true);
                        }, 800);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <h2 className="text-xl">Manage Interest</h2>
                    <span>&nbsp;</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                {interests &&
                  interests.map((interest, index) => (
                    <>
                      <div
                        key={index}
                        // onClick={() => {
                        //   if (
                        //     selectedInterest.find(
                        //       (si) => si.name === select.name
                        //     )
                        //   ) {
                        //     setSelectedInterest(
                        //       selectedInterest.filter(
                        //         (interest) => interest.name !== select.name
                        //       )
                        //     );
                        //   } else {
                        //     setSelectedInterest((selected) => [
                        //       ...selected,
                        //       { name: select.name },
                        //     ]);
                        //   }
                        // }}
                        className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]"
                      >
                        <span
                          // className={
                          //   selectedInterest.find(
                          //     (si) => si.name === select.name
                          //   )
                          //     ? "bg-purple-600 px-8 py-4 rounded-full text-white"
                          //     : "bg-gray-100 px-8 py-4 rounded-full"
                          // }
                          className="bg-gray-100 px-8 py-4 rounded-full"
                        >
                          {interest.name}
                        </span>
                      </div>
                    </>
                  ))}
              </div>
            </>
          </IonModal>
        </IonContent>
      </IonPage>
    </>
  );
};

export default React.memo(Profile);
