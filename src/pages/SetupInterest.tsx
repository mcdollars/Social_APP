import React, { useState } from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import "./Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps, useLocation } from "react-router";
import { set } from "../util/store";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setEmail: typeof setEmail;
}

interface Interest {
  name: string;
}

interface LoginProps extends OwnProps, DispatchProps {}

const SetupInterest: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  // const location = useLocation();
  // const state: any = location.state;
  const router = useIonRouter();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);

  const selection = [
    { name: "Travel" },
    { name: "Relax" },
    { name: "Sight Seeing" },
    { name: "Local Discovery" },
    { name: "Fun  & Thrills" },
    { name: "Adventure" },
    { name: "Beach" },
    { name: "Food" },
    { name: "Monuments" },
    { name: "Parks" },
    { name: "Play" },
    { name: "Retreat" },
    { name: "Cove" },
    { name: "Tent" },
  ];

  const setupInterest = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formSubmitted) {
      // await setEmailAction(email);
      // history.push("/tabs/home", { direction: "none" });
      try {
        //   const response = await fetch(
        //     `${process.env.REACT_APP_API}/api/profile`,
        //     {
        //       method: "PUT",
        //       body: JSON.stringify({ interests: selectedInterest }),
        //       headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //         // "x-access-token": state.state.token,
        //       },
        //     }
        //   );

        //   if (!response.ok) {
        //     const message = await response.json();
        //     console.log(message.message);
        //   } else {
        //     const result = await response.json();
        //     set("token", result.token);
        //     await setIsLoggedIn(true);
        router.push(
          "/tabs/home",
          "forward",
          "push"
          // state: result,
        );
        // }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const skip = () => {
    router.push("/tabs/homes", "forward", "push");
  };

  return (
    <IonPage id="login-page">
      <IonContent>
        <div className="flex flex-col h-screen">
          <div className="container p-4 mb-auto">
            <div className="flex flex-row justify-between">
              <h6 className="text-2xl mb-2">
                Select Interests ({selectedInterest.length})
              </h6>
              <span className="text-xl mb-2 text-violet-800" onClick={skip}>
                Skip
              </span>
            </div>
            <p className="mb-4">
              At least 3 most interested to you Or you can do it anytime at your
              profile.
            </p>
            {selection &&
              selection.map((select, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (
                      selectedInterest.find((si) => si.name === select.name)
                    ) {
                      setSelectedInterest(
                        selectedInterest.filter(
                          (interest) => interest.name !== select.name
                        )
                      );
                    } else {
                      setSelectedInterest((selected) => [
                        ...selected,
                        { name: select.name },
                      ]);
                    }
                  }}
                  className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]"
                >
                  <span
                    className={
                      selectedInterest.find((si) => si.name === select.name)
                        ? "bg-purple-600 px-8 py-4 rounded-full text-white"
                        : "bg-gray-100 px-8 py-4 rounded-full"
                    }
                  >
                    {select.name}
                  </span>
                </div>
              ))}
          </div>
          <div className="p-4">
            <button
              type="button"
              onClick={setupInterest}
              className={
                selectedInterest.length > 0
                  ? "w-full text-white bg-purple-600 py-4 px-4 rounded-lg mb-4"
                  : "w-full text-gray-50 bg-gray-400 py-4 px-4 rounded-lg mb-4"
              }
              disabled={selectedInterest.length <= 0}
            >
              Submit
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setEmail,
  },
  component: SetupInterest,
});
