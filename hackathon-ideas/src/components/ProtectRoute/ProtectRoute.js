import React from 'react';
import { Route, Redirect } from "react-router-dom";

function ProtectRoute(props) {
    let isAuthorized = localStorage.getItem("isAuthorized");
  return (
    <Route
    render={() =>
        isAuthorized === "true" ? props.children : (
        <Redirect to="/login"/>
      )
    }
  />
  )
}

export default ProtectRoute