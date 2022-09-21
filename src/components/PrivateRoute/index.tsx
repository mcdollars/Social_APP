/**
 *
 * PrivateRoute
 *
 */
import * as React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={
        (props) => (
          // auth ? (
          <Component {...props} />
        )
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/",
        //       state: { from: props.location },
        //     }}
        //   />
        // )
      }
    />
  );
};

export default PrivateRoute;
