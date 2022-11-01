/**
 *
 * PrivateRoute
 *
 */
import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import Store from "../../helpers/Store";
import Auth from "../../helpers/Auth";

/*
const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // return await Store.get("token") !== null ? (
        return <Component {...props} />;
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/login",
        //       state: { from: props.location },
        //     }}
        //   />
        // );
      }}
    />
  );
};

export default PrivateRoute;
*/

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return Auth.validate() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
