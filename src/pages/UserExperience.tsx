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
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="bg-background-color">
          <div className="container-mx-auto">
            <div className="content-Experience">
              <div className="flex items-center px-3 pt-4 pb-3 bg-white">
                <div className="">
                  <img src="assets/images/discover/back.png" alt="" />
                </div>
                <div className="text-main-color flex text-sm mx-auto font-medium rounded-lg p-px">
                  <div>My Experience</div>
                </div>
              </div>
              <div className="flex justify-between px-8 my-1 py-4 bg-white">
                <div className="text-center">
                  <div className="font-extrabold">12</div>
                  <div className="text-main-color text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="font-extrabold">56</div>
                  <div className="text-main-color text-sm">Cities</div>
                </div>
                <div className="text-center">
                  <div className="font-extrabold">25</div>
                  <div className="text-main-color text-sm">Experiences</div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-2 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Austria</div>
                  <div className="text-blue-color text-xs mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        2 <span className="font-normal"> cities - </span> 3
                        <span className="font-normal"> experiences</span>
                      </div>
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        5 <span className="font-normal"> cities - </span> 2
                        <span className="font-normal"> experiences</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-color mt-3">
                      <div style={{ fontSize: "12px" }}>24 May, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-2 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Croatia</div>
                  <div className="text-blue-color text-xs mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        2 <span className="font-normal"> cities - </span> 3
                        <span className="font-normal"> experiences</span>
                      </div>
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        5 <span className="font-normal"> cities - </span> 2
                        <span className="font-normal"> experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color mt-3">
                      <div style={{ fontSize: "12px" }}>24 May, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-2 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Cyprus</div>
                  <div className="text-blue-color text-xs mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        2 <span className="font-normal"> cities - </span> 3
                        <span className="font-normal"> experiences</span>
                      </div>
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        5 <span className="font-normal"> cities - </span> 2
                        <span className="font-normal"> experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color mt-3">
                      <div style={{ fontSize: "12px" }}>24 May, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-2 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Czech Republic</div>
                  <div className="text-blue-color text-xs mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        2 <span className="font-normal"> cities - </span> 3
                        <span className="font-normal"> experiences</span>
                      </div>
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        5 <span className="font-normal"> cities - </span> 2
                        <span className="font-normal"> experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color mt-3">
                      <div style={{ fontSize: "12px" }}>24 May, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-2 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Egypt</div>
                  <div className="text-xs mb-2 text-yellow-color">Africa</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        2 <span className="font-normal"> cities - </span> 3
                        <span className="font-normal"> experiences</span>
                      </div>
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        5 <span className="font-normal"> cities - </span> 2
                        <span className="font-normal"> experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color mt-3">
                      <div style={{ fontSize: "12px" }}>24 May, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-2 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Italy</div>
                  <div className="text-blue-color text-xs mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        2 <span className="font-normal"> cities - </span> 3
                        <span className="font-normal"> experiences</span>
                      </div>
                      <div style={{ fontSize: "12px" }} className="font-medium">
                        5 <span className="font-normal"> cities - </span> 2
                        <span className="font-normal"> experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color mt-3">
                      <div style={{ fontSize: "12px" }}>24 May, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
