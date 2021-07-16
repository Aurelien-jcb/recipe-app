import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/Login";
import Register from "../pages/Register";

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}
