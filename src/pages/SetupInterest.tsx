import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonModal,
} from "@ionic/react";
import "./Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setEmail: typeof setEmail;
}

interface LoginProps extends OwnProps, DispatchProps {}

const SetupInterest: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState([""]);

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

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      await setIsLoggedIn(true);
      await setEmailAction(email);
      history.push("/tabs/schedule", { direction: "none" });
    }
  };

  return (
    <IonPage id="login-page">
      <div className="flex flex-col h-screen">
        <div className="container p-4 mb-auto">
          <div className="flex flex-row justify-between">
            <h6 className="text-2xl mb-2">Select Interests ({selectedInterest.length - 1})</h6>
            <span className="text-xl mb-2 text-violet-800">Skip</span>
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
                  if (selectedInterest.includes(select.name)) {
                    setSelectedInterest(
                      selectedInterest.filter(
                        (interest) => interest !== select.name
                      )
                    );
                  } else {
                    setSelectedInterest((selected) => [
                      ...selected,
                      select.name,
                    ]);
                  }
                }}
                className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]"
              >
                <span
                  className={
                    selectedInterest.includes(select.name)
                      ? "bg-purple-600 px-8 py-4 rounded-full text-white"
                      : "bg-gray-100 px-8 py-4 rounded-full"
                  }
                >
                  {select.name}
                </span>
              </div>
            ))}
          {/* <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">Relax</span>
          </div>
          <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">
              Sight Seeing
            </span>
          </div>
          <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">
              Local Discovery
            </span>
          </div>
          <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">
              Fun {"&"} Thrills
            </span>
          </div>
          <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">
              Adventure
            </span>
          </div>
          <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">Beach</span>
          </div>
          <div className="px-2 py-5 mb-4 rounded-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')]">
            <span className="bg-gray-100 px-8 py-4 rounded-full">Food</span>
          </div> */}
        </div>
      </div>
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
