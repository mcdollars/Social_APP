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
import Store from "../helpers/Store";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  const router = useIonRouter();
  const [tip, setTip] = React.useState("");
  const [tips, setTips] = React.useState([]);

  const goBack = () => {
    setTimeout(() => {
      router.push("/create-experiences-activity", "root", "pop");
    }, 800);
  };

  React.useEffect(() => {
    Store.get("quickTips").then((data: any) => {
      data ? setTips(data) : Store.set("quickTips", []);
    });
  }, []);

  const addTip = async () => {
    const quickTips = await Store.get("quickTips");
    quickTips.push(tip);

    await Store.set("quickTips", quickTips);

    setTips(quickTips);
    setTip("");
  };

  const add = async () => {
    if (tip.length > 0) {
      const quickTips = await Store.get("quickTips");
      quickTips.push(tip);

      await Store.set("quickTips", quickTips);
    }
    goBack();
  };

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div>
          <div className="container experience-settings mb-64">
            <div className="pt-4 px-2 pb-2 rounded-b-md shadow-md">
              <div className="flex justify-between items-center">
                <div onClick={goBack}>
                  <img src="assets/images/discover/close.png" alt="" />
                </div>
                <span className="text-center font-medium ml-5">Quick Tips</span>
                <span
                  onClick={add}
                  className="text-xs font-medium py-1 px-3 bg-main-color text-white rounded-full"
                >
                  Add
                </span>
              </div>
            </div>
            <div className="text-sm mt-5 px-3">
              {tips &&
                tips.length > 0 &&
                tips.map((t, i) => (
                  <div className="flex" key={i}>
                    <div className="mr-3">
                      <img src="assets/images/73-81/ON.png" alt="" />
                    </div>
                    <textarea
                      className="border-transparent focus:border-transparent focus:ring-0"
                      name="quicktip"
                      id="quicktip"
                      cols={30}
                      placeholder="Add tip"
                      readOnly
                      value={t}
                    ></textarea>
                  </div>
                ))}
              <div className="flex">
                <div className="mr-3">
                  <img src="assets/images/73-81/ON.png" alt="" />
                </div>
                <textarea
                  className="border-transparent focus:border-transparent focus:ring-0"
                  name="quicktip"
                  id="quicktip"
                  cols={30}
                  placeholder="Add tip"
                  onChange={(e) => setTip(e.target.value)}
                  value={tip}
                ></textarea>
              </div>
              <div className="flex items-center mt-2">
                <div className="mr-3">
                  <img
                    className="w-4"
                    src="assets/images/73-81/arrow.png"
                    alt=""
                  />
                </div>
                <input
                  className="text-gray-color py-2 px-2 border-transparent focus:border-transparent focus:ring-0 block"
                  placeholder="Add another tip"
                  onClick={addTip}
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full bottom-0 left-0">
            <div className="flex justify-around items-center py-2 rounded-t-lg px-6">
              <a href="#">
                <img
                  className="w-16"
                  src="assets/images/73-81/price-mute.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-10"
                  src="assets/images/73-81/flag-mute.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-10"
                  src="assets/images/73-81/like-mute.png"
                  alt=""
                />
              </a>
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
