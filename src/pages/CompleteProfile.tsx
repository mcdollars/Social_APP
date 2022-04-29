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

const CompleteProfile: React.FC<LoginProps> = ({
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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="flex flex-col h-screen">
        <div className="container p-4 mb-auto">
          <div className="flex flex-row justify-between mb-2">
            <h6 className="text-2xl inline">Complete Profile</h6>
            <span className="text-xl inline text-violet-800">Skip</span>
          </div>
          <div className="flex flex-row justify-between mb-6">
            <img
              src="https://via.placeholder.com/100x100"
              className="object-contain rounded-full"
              width="100"
              height="100"
              alt="logo"
            />
            <label
              htmlFor="upload-profile"
              className="border-2 border-gray-500 rounded-xl w-2/4 h-10 text-center align-text-bottom m-auto pt-2"
            >
              Upload
            </label>
            <input className="hidden" id="upload-profile" type="file" />
          </div>
          <div className="flex flex-row justify-between mb-6">
            <div className="mr-2">
              <label htmlFor="firstname" className="block">
                First Name
              </label>
              <input
                type="text"
                placeholder="john"
                className="border-2 border-gray-300 rounded-xl w-full"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="john"
                className="border-2 border-gray-300 rounded-xl w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                type="text"
                placeholder="(optional)"
                className="border-2 border-gray-300 rounded-xl w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="gender" className="block">
                Gender
              </label>
              <div className="flex flex-row justify-between">
                <button className="px-4 py-2 rounded-full bg-gray-200">
                  Female
                </button>
                <button className="px-4 rounded-full bg-gray-200">Male</button>
                <button className="px-4 rounded-full bg-gray-200">
                  Unspecified
                </button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="dob" className="block">
                Date of Birth
              </label>
              <input
                type="date"
                className="border-2 border-gray-300 w-full rounded-xl"
              />
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                placeholder="(optional)"
                className="border-2 border-gray-300 rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-6 text-center">
          <p>I agree with Terms of Service and Privacy Policy</p>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="bg-gray-300 w-full p-4 rounded-xl text-gray-500"
          >
            Create Account
          </button>
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
  component: CompleteProfile,
});
