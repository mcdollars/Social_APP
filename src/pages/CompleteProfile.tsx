import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { set } from "../util/store";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
  setEmail: typeof setEmail;
}

interface SignupForm {
  firstname: string;
  lastname: string;
  gender: string;
  date_of_birth: Date;
  username?: string;
  email?: string;
}

interface LoginProps extends OwnProps, DispatchProps {}

const CompleteProfile: React.FC<LoginProps> = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const location = useLocation();
  const state: any = location.state;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [agree, setAgree] = useState(true);
  const [formData, setFormData] = useState<SignupForm>({
    firstname: "",
    lastname: "",
    gender: "",
    date_of_birth: new Date(),
    username: "",
    email: "",
  });

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as any);
    const formProps = Object.fromEntries(data);

    setFormSubmitted(true);

    if (formSubmitted) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/api/profile`,
          {
            method: "PUT",
            body: JSON.stringify({ ...formProps }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "x-access-token": state.state.token,
            },
          }
        );

        if (!response.ok) {
          const message = await response.json();
          console.log(message.message);
        } else {
          const result = await response.json();
          await setIsLoggedIn(true);
          history.push("/signup-interest", {
            direction: "none",
            state: result,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <IonPage id="login-page">
      <IonContent>
        <form noValidate onSubmit={signup} className="flex flex-col h-screen">
          <div className="container p-4 mb-auto">
            <div className="flex flex-row justify-between mb-2">
              <h6 className="text-2xl inline">Complete Profile</h6>
              <a
                href="/signup-interest"
                className="text-xl inline text-violet-800"
                onClick={() =>
                  history.push("/signup-interest", {
                    direction: "none",
                  })
                }
              >
                Skip
              </a>
            </div>
            <div className="flex flex-row justify-between my-6">
              <img
                src="https://via.placeholder.com/100x100"
                className="object-contain rounded-full w-1/2 p-4"
                width="100"
                height="100"
                alt="logo"
              />
              <label
                htmlFor="upload-profile"
                className="border-2 border-gray-500 rounded-xl w-1/2 h-10 text-center align-text-bottom m-auto pt-2"
              >
                Upload
              </label>
              <input className="hidden" id="upload-profile" type="file" />
            </div>
            <div className="flex flex-row justify-between my-6">
              <div className="mr-2">
                <label htmlFor="firstname" className="block">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
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
                  name="lastname"
                  placeholder="john"
                  className="border-2 border-gray-300 rounded-xl w-full"
                />
              </div>
            </div>
            <div className="my-6">
              <div>
                <label htmlFor="username" className="block">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="(optional)"
                  className="border-2 border-gray-300 rounded-xl w-full"
                />
              </div>
            </div>
            <div className="my-6">
              <div>
                <input type="hidden" name="gender" value={formData.gender} />
                <label htmlFor="gender" className="block">
                  Gender
                </label>
                <div className="flex flex-row justify-between">
                  <button
                    type="button"
                    className={
                      formData.gender == "female"
                        ? "px-4 py-2 rounded-full bg-purple-600 text-white"
                        : "px-4 py-2 rounded-full bg-gray-200"
                    }
                    onClick={() =>
                      setFormData({ ...formData, gender: "female" })
                    }
                  >
                    Female
                  </button>
                  <button
                    type="button"
                    className={
                      formData.gender == "male"
                        ? "px-4 py-2 rounded-full bg-purple-600 text-white"
                        : "px-4 py-2 rounded-full bg-gray-200"
                    }
                    onClick={() => setFormData({ ...formData, gender: "male" })}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    className={
                      formData.gender == "unspecified"
                        ? "px-4 py-2 rounded-full bg-purple-600 text-white"
                        : "px-4 py-2 rounded-full bg-gray-200"
                    }
                    onClick={() =>
                      setFormData({ ...formData, gender: "unspecified" })
                    }
                  >
                    Unspecified
                  </button>
                </div>
              </div>
            </div>
            <div className="my-6">
              <div>
                <label htmlFor="dob" className="block">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date_of_birth: new Date(e.target.value),
                    })
                  }
                  className="border-2 border-gray-300 w-full rounded-xl"
                />
              </div>
            </div>
            <div className="my-6">
              <div>
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="(optional)"
                  className="border-2 border-gray-300 rounded-xl w-full"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-6 text-center">
              <p>
                <input
                  type="checkbox"
                  name="agree"
                  value="agree"
                  className="mr-2"
                  onChange={(e) => setAgree(!agree)}
                />
                I agree with Terms of Service and Privacy Policy
              </p>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className={
                  agree === true
                    ? "bg-gray-300 w-full p-4 rounded-xl text-gray-500"
                    : "bg-purple-600 w-full p-4 rounded-xl text-white"
                }
                disabled={agree}
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
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
  component: CompleteProfile,
});
