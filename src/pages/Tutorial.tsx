import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  useIonViewWillEnter,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper as SwiperCore } from "swiper";
import { arrowForward } from "ionicons/icons";
import { setMenuEnabled } from "../data/sessions/sessions.actions";
import { setHasSeenTutorial } from "../data/user/user.actions";
import "./Tutorial.scss";
import "swiper/swiper.min.css";
import "@ionic/react/css/ionic-swiper.css";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
  setMenuEnabled: typeof setMenuEnabled;
}

interface TutorialProps extends OwnProps, DispatchProps {}

const Tutorial: React.FC<TutorialProps> = ({
  history,
  setHasSeenTutorial,
  setMenuEnabled,
}) => {
  const [showSkip, setShowSkip] = useState(true);
  let [swiper, setSwiper] = useState<SwiperCore>();

  useIonViewWillEnter(() => {
    setMenuEnabled(false);
  });

  const startApp = async () => {
    await setHasSeenTutorial(true);
    await setMenuEnabled(true);
    history.replace("/login", { direction: "none" });
  };

  const handleSlideChangeStart = () => {
    if (!swiper) return;
    setShowSkip(!swiper.isEnd);
  };

  return (
    <IonPage id="tutorial-page">
      <IonContent fullscreen>
        <div>
          <div className="content-onboarding">
            <div className="relative">
              <div className="holder-images grid grid-cols-3 gap-px">
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-285.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-286.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-287.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-288.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-289.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-290.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-291.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-292.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-284.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-293.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-294.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="image-holder w-full h-full">
                  <img
                    src="assets/images/onboarding/Rectangle-295.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute bottom-content bottom-0 translate-y-1/2 w-32 h-32 left-1/2 -translate-x-1/2">
                <div className="circle rounded-full flex items-center justify-center bg-transparent border-2 w-full h-full">
                  <div className="image-holder bg-main-color rounded-full w-4/5 h-4/5 border-8 border-white shadow-xl flex items-center justify-center">
                    <img
                      className="w-1/3"
                      src="assets/images/short-light-logo.png"
                      alt="short logo"
                    />
                  </div>
                </div>
              </div>
              <div className="img-7-holder absolute top-1/4 -translate-y-1/2 left-1/3 -translate-x-1/2">
                <img src="assets/images/onboarding/7.png" alt="" />
              </div>
              <div className="img-8-holder absolute right-1/4 translate-x-3/4 top-1/4 -translate-y-full">
                <img src="assets/images/onboarding/8.png" alt="" />
              </div>
              <div className="img-3-holder absolute right-1/4 translate-x-2 top-1/4 translate-y-1/3">
                <img src="assets/images/onboarding/3.png" alt="" />
              </div>
              <div className="img-6-holder absolute top-1/2 -translate-y-1/4 right-1/2 -translate-x-full">
                <img src="assets/images/onboarding/6.png" alt="" />
              </div>
              <div className="img-4-holder absolute bottom-1/3 translate-y-1/2 right-1/2 translate-x-1/2">
                <img src="assets/images/onboarding/4.png" alt="" />
              </div>
              <div className="img-2-holder absolute right-1/4 translate-x-full bottom-2/4 translate-y-full">
                <img src="assets/images/onboarding/2.png" alt="" />
              </div>
              <div className="img-1-holder absolute left-1/4 -translate-x-full bottom-1/4 translate-y-full">
                <img src="assets/images/onboarding/1.png" alt="" />
              </div>
              <div className="img-5-holder absolute right-1/4 translate-x-3/4 bottom-1/4 translate-y-full">
                <img src="assets/images/onboarding/5.png" alt="" />
              </div>
            </div>
            <div className="info-content text-center">
              <div className="title text-main-color mt-20 text-3xl font-medium leading-7 mb-4">
                Share the experience
              </div>
              <div className="info secondary-color w-2/3 mx-auto mb-8">
                Find out the best places to go from people you know
              </div>
              <div className="button-holder mb-8 mx-auto" onClick={startApp}>
                <span className="get-started bg-main-color text-white w-5/6 inline-block rounded-xl py-3 font-medium">
                  Get started
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <Swiper onSwiper={setSwiper} onSlideChangeTransitionStart={handleSlideChangeStart}>
          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />
            <h2 className="slide-title">
              Welcome to <b>ICA</b>
            </h2>
            <p>
              The <b>social experienec app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-2.png" alt="" className="slide-image" />
            <h2 className="slide-title">What is Ionic?</h2>
            <p>
              <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-3.png" alt="" className="slide-image" />
            <h2 className="slide-title">What is Ionic Appflow?</h2>
            <p>
              <b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-4.png" alt="" className="slide-image" />
            <h2 className="slide-title">Ready to Play?</h2>
            <IonButton fill="clear" onClick={startApp}>
              Continue
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </SwiperSlide>
        </Swiper> */}
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setHasSeenTutorial,
    setMenuEnabled,
  },
  component: Tutorial,
});
