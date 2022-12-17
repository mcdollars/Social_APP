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
        <div className="container-mx-auto">
          <div className="content-Experiences">
            <div className="bg-white px-3 pt-8 pb-2 shadow-md rounded-b-xl">
              <div className="flex justify-between items-center">
                <div></div>
                <div>Experiences</div>
                <div>
                  <img src="/assets/images/Groups/user-plus.png" alt="" />
                </div>
              </div>
            </div>
            <div className="p-5 mb-20">
              <div className="my-3 font-medium">Your Experiences</div>
              <div className="flex">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14.png"
                  alt=""
                />
                <div className="ml-4">
                  <div className="font-medium">Thai Vacation</div>
                  <div className="bg-green-color text-white rounded text-center py-0.5 px-2 w-fit text-sm">
                    Open
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <img
                  className="rounded"
                  src="/assets/images/Groups/Rectangle 14.png"
                  alt=""
                />
                <div className="ml-4">
                  <div className="font-medium">Bali</div>
                  <div className="bg-secondary-color text-white rounded text-center py-0.5 px-2 w-fit text-sm">
                    Closed
                  </div>
                </div>
              </div>
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
