/**
 *
 * PublicRoute
 *
 */
import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../helpers/Auth";
import Store from "../../helpers/Store";

/*
const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // return await Store.get("token") !== null &&
        //   (window.location.pathname === "/" ||
        //     window.location.pathname === "/login" ||
        //     window.location.pathname === "/signup" ||
        //     window.location.pathname === "/forgot-password") ? (
        //   <Redirect
        //     to={{
        //       pathname: "/tabs/home",
        //       state: { from: props.location },
        //     }}
        //   />
        // ) : (
        return <Component {...props} />;
        // );
      }}
    />
  );
};

export default PublicRoute;
*/

const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
