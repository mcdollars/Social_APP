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
} from "@ionic/react";
import "./Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setEmail: typeof setEmail;
}

interface LoginProps extends OwnProps, DispatchProps {}

const SignupVerify: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const location = useLocation();
  const state: any = location.state;

  const [otp, setOTP] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!otp) {
      setOtpError(true);
    }

    if (otp && formSubmitted) {
      // await setIsLoggedIn(true);
      // await setEmailAction(email);
      // history.push("/tabs/schedule", { direction: "none" });
      console.log(location);
    }
  };

  React.useEffect(() => {
    const handleOTP = async (token: string, otp: string) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/auth/verify-pre-signup?token=${token}`,
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
          console.log(message)
        } else {
          const result = await response.json();
          console.log(result);
          // await setIsLoggedIn(true);
          // await setEmailAction(email);
          if (result) {
            history.push("/signup-complete-profile", {
              direction: "none",
              state: result,
            });
          }
        }
      } catch (err) {
        console.log(err)
      }
    };

    if (otp.length === 4) {
      handleOTP(state.state.token, otp);
    }
  }, [otp]);

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
          <h1 className="text-4xl py-8">Verify phone number</h1>
          <p>
            We sent a a 4-digit code to +1 (305) 1234 567. To validate your
            account insert this code below.
          </p>
        </div>

        <form noValidate onSubmit={login} className="px-4 mb-auto">
          <div className="flex flex-row justify-around">
            <input
              name="otp"
              type="number"
              // className="p-2 border-2 border-gray-100 rounded-xl w-1/6 block mb-8 bg-gray-100"
              className="p-2 border-2 border-gray-100 rounded-xl block mb-8 bg-gray-100"
              value={otp}
              onChange={(e) => setOTP(e.target.value!)}
              required
            ></input>
          </div>
        </form>
      </div>
      <div className="mb-8 text-center px-4">
        <span>{"Did not receive code? "}</span>
        <div className="w-full py-4 mt-4 bg-white text-purple-600 rounded-xl font-bold border-2 border-purple-600">
          Resend Code
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
  component: SignupVerify,
});
