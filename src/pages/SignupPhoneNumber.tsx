import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
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
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!phone) {
      setPhoneError(true);
    }

    if (phone) {
      try {
        const token = await get("token");
        const response = await fetch(
          `${process.env.REACT_APP_API}/auth/pre-signup`,
          {
            method: "POST",
            body: JSON.stringify({ phone }),
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
          console.log(result);
          // await setIsLoggedIn(true);
          // await setEmailAction(email);
          if (result) {
            history.push("/signup-verify-number", {
              direction: "none",
              state: result,
            });
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
      <IonContent>
        <div className="flex flex-col h-screen">
          <div className="px-4 py-8">
            <a href="/login">
              <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
            </a>
            <h1 className="text-3xl py-8">Enter your mobile number</h1>
            <p>
              We want to create a respectful community without bots and online
              abuse. Breach of our guidelines results in removal and reporting
              of your account.
            </p>
          </div>

          <form noValidate onSubmit={verify} className="px-4 mb-auto">
            <input
              name="otp"
              type="number"
              className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8"
              value={phone}
              onChange={(e) => setPhone(e.target.value!)}
              required
            ></input>

            {formSubmitted && phoneError && (
              <span className="text-red-400">
                <p className="ion-padding-start">Phone number is required</p>
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
  component: SignupPhoneNumber,
});
