/**
 *
 * PublicRoute
 *
 */
import * as React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute: React.FC<any> = ({
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={
        (props) => (
          // auth &&
          // (window.location.pathname === "/" ||
          //   window.location.pathname === "/login" ||
          //   window.location.pathname === "/signup" ||
          //   window.location.pathname === "/forgot-password") ? (
          //   <Redirect
          //     to={{
          //       pathname: "/",
          //       state: { from: props.location },
          //     }}
          //   />
          // ) : (
          <Component {...props} />
        )
        // )
      }
    />
  );
};

export default PublicRoute;
