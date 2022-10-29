import React from "react";
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
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Storage } from "@capacitor/storage";
import { create } from "../helpers/GroupExperiences";

interface OwnProps {
  setOpen: any;
}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const MY_EXPERIENCE = "MYEXPERIENCE";

const Groups: React.FC<GroupsProps> = ({ setOpen }) => {
  const [form, setForm] = useState({
    place: "",
    name: "",
    photos: [],
  });
  const router = useIonRouter();

  const handleExperienceSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const { groupExperience } = await create(form);
      Storage.set({
        key: MY_EXPERIENCE,
        value: JSON.stringify({ ...groupExperience, photos: [] }),
      });
      setOpen(false);
      setTimeout(() => {
        router.push("/create-experiences-map", "forward", "push");
      }, 800);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <form
          onSubmit={handleExperienceSubmit}
          className="container experience-settings"
        >
          <div className="flex items-center p-2 shadow-md rounded-b-md">
            <span className="w-8" onClick={() => setOpen(false)}>
              <img src="assets/images/discover/close.png" alt="" />
            </span>
            <span className="text-sm text-center grow">New Experience</span>
          </div>
          <div className="text-xs px-4 mt-4">
            <div>
              <div className="mt-5">
                <div className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src="assets/images/experiences/MapPinLine.png"
                    alt=""
                  />
                  <span className="font-bold secondary-color">
                    Place for your experience
                  </span>
                </div>
                <div>
                  <input
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                    type="text"
                    placeholder="Ex: Miami"
                    value={form.place}
                    onChange={(e) =>
                      setForm({ ...form, place: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src="assets/images/experiences/Notebook.png"
                    alt=""
                  />
                  <span className="font-bold secondary-color">
                    Experience Name
                  </span>
                </div>
                <div>
                  <input
                    className="w-full mt-2 border border-slate-100 p-3 rounded-lg"
                    type="text"
                    placeholder="(optional)"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-base">My trip public</span>
                  <div>
                    <img src="assets/images/Groups/Controls.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <button
                  type="submit"
                  className={`w-4/5 mx-auto text-center block py-3 text-base font-bold rounded-lg ${
                    form.place && form.name
                      ? " text-white bg-cyan-500"
                      : "text-gray-color bg-gray-200 disabled"
                  }`}
                >
                  Add Experience
                </button>
              </div>
            </div>
          </div>
        </form>
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
