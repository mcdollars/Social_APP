import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomeOrTutorial from "../components/HomeOrTutorial";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import SignupPhoneNumber from "../pages/SignupPhoneNumber";
import SignupVerify from "../pages/SignupVerify";
import CompleteProfile from "../pages/CompleteProfile";
import SetupInterest from "../pages/SetupInterest";
import LoginPhoneNumber from "../pages/LoginPhoneNumber";
import AdvanceSettings from "../pages/AdvanceSettings";

const routes: any = [
  { path: "/login", component: Login, exact: true },
  { path: "/login-phone-number", component: LoginPhoneNumber, exact: true },
  { path: "/reset-password", component: ResetPassword, exact: true },
  { path: "/forgot-password", component: ForgotPassword, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/signup-phone-number", component: SignupPhoneNumber, exact: true },
  { path: "/signup-verify-number", component: SignupVerify, exact: true },
  { path: "/signup-interest", component: SetupInterest, exact: true },
  { path: "/advance-settings", component: AdvanceSettings, exact: true },
  {
    path: "/signup-complete-profile",
    component: CompleteProfile,
    exact: true,
  },
  { path: "/", component: HomeOrTutorial, exact: true },
];

export default routes;
