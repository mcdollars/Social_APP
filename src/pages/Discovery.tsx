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
import { useParams } from "react-router";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const params: any = useParams();

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div className="bg-background-color">
          <div className="container-mx-auto">
            <div className="content-discover-top">
              <div className="bg-white px-3 pt-8 pb-4 border-b">
                <div className="relative flex space-x-4">
                  <div className="relative w-80 h-9">
                    <input
                      autoFocus
                      type="text"
                      className="text-sm border py-2 w-full indent-10 rounded-lg"
                      value="Georgetown"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 translate-x-full">
                      <img src="assets/images/discover/search.png" alt="" />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-7 translate-x-full">
                      <img
                        className=""
                        src="/assets/images/discover/Ellipse 29.png"
                        alt=""
                      />
                      <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="/assets/images/discover/Shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <button type="reset" className="">
                    Cancel
                  </button>
                </div>
                <div className="mt-4">
                  <ul className="list-none flex justify-between gap-2.5 pb-2 overflow-x-scroll">
                    <li className="bg-secondary-color w-20 h-8 rounded-3xl px-6 py-2 text-white flex justify-center items-center">
                      Top
                    </li>
                    <li className="bg-lines-color w-20 h-8 rounded-3xl px-6 py-2 flex justify-center items-center text-main-color">
                      Places
                    </li>
                    <li className="bg-lines-color w-20 h-8 rounded-3xl px-6 py-2 flex justify-center items-center text-main-color">
                      People
                    </li>
                    <li className="bg-lines-color w-24 h-8 rounded-3xl px-6 py-2 flex justify-center items-center text-main-color">
                      Interests
                    </li>
                  </ul>
                </div>
              </div>
              {params && params.type === "top" && (
                <div className="bg-white p-5">
                  <div className="flex items-center mt-3">
                    <div className="flex justify-center">
                      <img src="/assets/images/discover/Group 5.png" alt="" />
                    </div>
                    <div className="ml-5">
                      <div>Georgetown</div>
                      <div className="text-gray-color">
                        Chiang Mai, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/avatar.png" alt="" />
                    <div className="ml-5">Lanna Georgetown</div>
                  </div>
                </div>
              )}
              {params && params.type === "people" && (
                <div className="bg-white p-5 pt-2">
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar.png"
                      alt=""
                    />
                    <div className="ml-5">Esther Howard</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-1.png"
                      alt=""
                    />
                    <div className="ml-5">Courtney Henry</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-2.png"
                      alt=""
                    />
                    <div className="ml-5">Floyd Miles</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-3.png"
                      alt=""
                    />
                    <div className="ml-5">Darlene Robertson</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-4.png"
                      alt=""
                    />
                    <div className="ml-5">Albert Flores</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-5.png"
                      alt=""
                    />
                    <div className="ml-5">Dianne Russell</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-6.png"
                      alt=""
                    />
                    <div className="ml-5">Bessie Cooper</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-7.png"
                      alt=""
                    />
                    <div className="ml-5">Leslie Alexander</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img
                      src="/assets/images/discover/people/avatar-8.png"
                      alt=""
                    />
                    <div className="ml-5">Ronald Richards</div>
                  </div>
                </div>
              )}
              {params && params.type === "interests" && (
                <div className="bg-white p-5 pt-2">
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Travel</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Seight seeng</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Parties</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Adventure</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Nature</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Beach</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Food</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Sports</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/search-diez.png" alt="" />
                    <div className="ml-5">Live events</div>
                  </div>
                </div>
              )}
              {params && params.type === "places" && (
                <div className="bg-white p-5 pt-2">
                  <h1 className="text-gray-color text-sm font-medium">
                    Popular places
                  </h1>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">eBags</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">Deux par Deux</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">Bloomingdales</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <button className="bg-lines-color text-center gap-2.5 mt-3 w-80 py-2 pr-3 pl-0 rounded-lg">
                    See all popular places
                  </button>
                  <h1 className="text-gray-color mt-3 text-sm font-medium">
                    Must do's
                  </h1>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">Eastbay</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">Driftaway Coffe</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">Cost Plus World Market</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <button className="bg-lines-color text-center gap-2.5 mt-3 w-80 py-2 pr-3 pl-0 rounded-lg">
                    See all popular places
                  </button>
                  <h1 className="text-gray-color mt-3 text-sm font-medium">
                    Must do's
                  </h1>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">Belk</div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">
                        Moreshwar Agro Products pvt. Ltd.
                      </div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <img src="/assets/images/discover/Group 5.png" alt="" />
                    <div>
                      <div className="ml-5">
                        Meena Commodity Trading Company
                      </div>
                      <div className="ml-5 text-gray-color text-sm">
                        Chiange May, Thailand
                      </div>
                    </div>
                  </div>
                  <button className="bg-lines-color text-center gap-2.5 mt-3 w-80 py-2 pr-3 pl-0 rounded-lg mb-24">
                    See all popular places
                  </button>
                </div>
              )}
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
