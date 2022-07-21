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
        <body className="bg-background-color">
          <div className="container-mx-auto">
            <div className="content-Experience">
              <div className="flex items-center px-3 pt-8 pb-3 bg-white rounded-b-xl">
                <div className="">
                  <img src="assets/images/discover/back.png" alt="" />
                </div>
                <div className="text-main-color bg-lines-color flex text-xs mx-auto font-medium rounded-lg p-px">
                  <div className="px-10 py-1.5 m-px rounded-lg">Feed</div>
                  <div className="px-8 py-1.5 m-px rounded-lg bg-white">
                    Experience
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-8 my-1 py-4 bg-white">
                <div className="text-center">
                  <div className="font-extrabold">10</div>
                  <div className="text-main-color text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="font-extrabold">23</div>
                  <div className="text-main-color text-sm">Cities</div>
                </div>
                <div className="text-center">
                  <div className="font-extrabold">30</div>
                  <div className="text-main-color text-sm">Experiences</div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-4 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Autria</div>
                  <div className="text-blue-color text-sm mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div className="font-medium text-sm">
                        2 <span className="font-normal"> cities - </span> 3{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                      <div className="font-medium text-sm">
                        5 <span className="font-normal"> cities - </span> 2{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color">
                      <div>24 May, 2020</div>
                      <div>Jul 12, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-4 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Croatia</div>
                  <div className="text-blue-color text-sm mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div className="font-medium text-sm">
                        2 <span className="font-normal"> cities - </span> 3{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                      <div className="font-medium text-sm">
                        5 <span className="font-normal"> cities - </span> 2{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color">
                      <div>24 May, 2020</div>
                      <div>Jul 12, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-4 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Cyprus</div>
                  <div className="text-blue-color text-sm mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div className="font-medium text-sm">
                        2 <span className="font-normal"> cities - </span> 3{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                      <div className="font-medium text-sm">
                        5 <span className="font-normal"> cities - </span> 2{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color">
                      <div>24 May, 2020</div>
                      <div>Jul 12, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-4 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Czech Republic</div>
                  <div className="text-blue-color text-sm mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div className="font-medium text-sm">
                        2 <span className="font-normal"> cities - </span> 3{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                      <div className="font-medium text-sm">
                        5 <span className="font-normal"> cities - </span> 2{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color">
                      <div>24 May, 2020</div>
                      <div>Jul 12, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-4 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Egypt</div>
                  <div className="text-sm mb-2 text-yellow-color">Africa</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div className="font-medium text-sm">
                        2 <span className="font-normal"> cities - </span> 3{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                      <div className="font-medium text-sm">
                        5 <span className="font-normal"> cities - </span> 2{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color">
                      <div>24 May, 2020</div>
                      <div>Jul 12, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white my-1 flex px-4 py-3">
                <div className="mr-4">
                  <img src="assets/images/experiences/Rectangle.png" alt="" />
                </div>
                <div className="">
                  <div className="font-medium mb-1">Italy</div>
                  <div className="text-blue-color text-sm mb-2">Europe</div>
                  <div className="flex">
                    <div className="mr-5">
                      <div className="font-medium text-sm">
                        2 <span className="font-normal"> cities - </span> 3{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                      <div className="font-medium text-sm">
                        5 <span className="font-normal"> cities - </span> 2{" "}
                        <span className="font-normal">experiences</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-color">
                      <div>24 May, 2020</div>
                      <div>Jul 12, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
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
