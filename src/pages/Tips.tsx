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
        <div className="content-tips">
            <div className="bg-white flex pt-8 px-5 pb-4 rounded-b-xl shadow-lg">
                <div>
                    <img src="assets/images/tips/back.png" alt="" />
                </div>
                <div className="text-main-color mx-auto">Quick Tips</div>
            </div>
            <div className="bg-white my-2 pt-2 pb-4 px-5">
                <div className="font-medium text-xl text-main-color mb-2">Novotel Hotel</div>
                <div className="text-sm text-gray-color mb-4">21 May, 2020</div>
                <div className="flex mb-8">
                    <div><img src="assets/images/tips/one-dolar.png" alt="" /></div>
                    <div className="mx-3"><img src="assets/images/tips/pink-flag.png" alt="" /></div>
                    <div><img src="assets/images/tips/dislike.png" alt="" /></div>
                </div>
                <div className="flex mb-4 items-start">
                    <div className="mr-2 w-1/12"><img className="mt-1" src="assets/images/tips/checkbox-on.png" alt="" /></div>
                    <div className="w-11/12 text-main-color">Mbezi beach is a 30 min boat right from Dar Es Salaam and will
                        cost
                        less than 5$. </div>
                </div>
                <div className="flex mb-4 items-start">
                    <div className="mr-2 w-1/12"><img className="mt-1" src="assets/images/tips/checkbox-on.png" alt="" /></div>
                    <div className="w-11/12 text-main-color">Don&apos;t forget to try the mojitos and tacos they were
                        favorite!
                    </div>
                </div>
            </div>
            <div className="bg-white my-2 pt-2 pb-4 px-5">
                <div className="font-medium text-xl text-main-color mb-2">Caesars Boulevard</div>
                <div className="text-sm text-gray-color mb-4">29 May, 2020</div>
                <div className="flex mb-8">
                    <div><img src="assets/images/tips/two-dolars.png" alt="" /></div>
                    <div className="mx-3"><img src="assets/images/tips/flag.png" alt="" /></div>
                    <div><img src="assets/images/tips/like.png" alt="" /></div>
                </div>
                <div className="flex mb-4 items-start">
                    <div className="mr-2 w-1/12"><img className="mt-1" src="assets/images/tips/checkbox-on.png" alt="" /></div>
                    <div className="w-11/12 text-main-color">Ask for Adam, best bartender in the world</div>
                </div>
                <div className="flex mb-4 items-start">
                    <div className="mr-2 w-1/12"><img className="mt-1" src="assets/images/tips/checkbox-on.png" alt="" /></div>
                    <div className="w-11/12 text-main-color">Book tickets for the show at least 3 month in advance at <span
                            className="font-bold">www.tickets.com</span></div>
                </div>
                <div className="flex mb-4 items-start">
                    <div className="mr-2 w-1/12"><img className="mt-1" src="assets/images/tips/checkbox-on.png" alt="" /></div>
                    <div className="w-11/12 text-main-color">Call Mike, best tour guide ever at 555-5555</div>
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
