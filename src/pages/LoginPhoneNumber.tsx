import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
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
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { get } from "../util/store";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setEmail: typeof setEmail;
}

interface LoginProps extends OwnProps, DispatchProps {}

const SignupPhoneNumber: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const [otp, setOTP] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!otp) {
      setOtpError(true);
    }

    if (otp) {
      try {
        const token = await get("token");
        const response = await fetch(
          `${process.env.REACT_APP_API}/api/login-verify`,
          {
            method: "POST",
            body: JSON.stringify({ otp }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "x-access-token": token,
            },
          }
        );

        if (!response.ok) {
          const message = await response.json();
          alert(message.message);
        } else {
          const result = await response.json();
          await setIsLoggedIn(true);
          // await setEmailAction(email);
          if (result) {
            history.push("/tabs/home", { direction: "none" });
          }
        }
      } catch (err) {
        alert(err);
        console.log(err);
      }
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
        <div className="px-4 py-8">
          <a href="/login">
            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
          </a>
          <h1 className="text-3xl py-8">Verify phone number</h1>
          <p>
            We sent a a 4-digit code to +1 (305) 1234 567. To validate your
            account insert this code below.
          </p>
        </div>

        <form noValidate onSubmit={verify} className="px-4 mb-auto">
          <input
            name="otp"
            type="number"
            className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8"
            value={otp}
            onChange={(e) => setOTP(e.target.value!)}
            required
          ></input>

          {formSubmitted && otpError && (
            <span className="text-red-400">
              <p className="ion-padding-start">OTP is required</p>
            </span>
          )}

          <button
            type="submit"
            className="w-full py-4 mt-4 bg-purple-600 text-white rounded-xl font-bold"
          >
            Send Code
          </button>
        </form>
        <div className="text-center mb-8">
          <p>
            Already have an account?{" "}
            <a href="/login" className="py-4 text-purple-600 font-bold">
              Login
            </a>
          </p>
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
  component: SignupPhoneNumber,
});
