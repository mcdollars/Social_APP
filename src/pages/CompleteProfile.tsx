import React, { useState } from "react";
import { 
  IonContent, 
  IonPage, 
  useIonRouter, 
 } from "@ionic/react";
import { camera } from 'ionicons/icons'
import "./Login.scss";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../data/user/user.actions";
import { connect } from "../data/connect";
import { RouteComponentProps, useLocation } from "react-router";
import { usePhotoGallery } from "../helpers/usePhotoGallery";
import Store from "../helpers/Store";

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
  const router = useIonRouter();
  const location = useLocation();
  const state: any = location.state;
  const { photo, takePhoto } = usePhotoGallery()

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
    const formProps: any = Object.fromEntries(data);


      try {
        // const response = await fetch(
        //   `${process.env.REACT_APP_API}/api/profile`,
        //   {
        //     method: "PUT",
        //     body: data,
        //     // headers: {
        //     //   // Accept: "application/json",
        //     //   // "x-access-token": state.state.token,
        //     // },
        //   }
        // );

        // if (!response.ok) {
        //   const message = await response.json();
        //   console.log(message.message);
        // } else {
        //   const result = await response.json();
        //   await setIsLoggedIn(true);
        const signup = await Store.get("signup");
        // formProps.avatar = '';
        await Store.set("signup", { ...signup, ...formProps });

        router.push(
          "/signup-interest",
          "forward",
          "push"
          // state: result,
        );
        // }
      } catch (err) {
        console.log(err);
      }
  };

  const skip = () => {
    router.push("/signup-interest", "forward", "push");
  };

  return (
    <IonPage id="login-page">
      <IonContent>
        <form
          noValidate
          onSubmit={signup}
          className="flex flex-col h-screen"
          encType="multipart/form-data"
        >
          <div className="container p-4 mb-auto">
            <div className="flex flex-row justify-between mb-2">
              <h6 className="text-2xl inline">Complete Profile</h6>
              <a
                href="/signup-interest"
                className="text-xl inline text-violet-800"
                onClick={skip}
              >
                Skip
              </a>
            </div>
            <div className="flex flex-row justify-between my-6">
              {photo ? 
                <img
                  src={photo.webviewPath}
                  className="object-contain rounded-full w-1/2 p-4"
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => takePhoto()}
                  /> :
                  <img
                  src="https://via.placeholder.com/100x100"
                  className="object-contain rounded-full w-1/2 p-4"
                  width="100"
                  height="100"
                  alt="logo"
                  onClick={() => takePhoto()}
                />
              }
              {photo ? "Change a photo" : "Upload a photo"}
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
                      formData.gender === "female"
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
                      formData.gender === "male"
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
                      formData.gender === "unspecified"
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
          </div>
          <div className="p-4">
            <div className="mb-6">
              <button
                type="submit"
                className={"bg-purple-600 w-full p-4 rounded-xl text-white"}
              >
                Update
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
