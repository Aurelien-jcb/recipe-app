import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../pages/Form";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import Menu from "../components/shared/Menu";
import Profile from "../pages/Profile";

export default function MainLayout() {
  return (
    <BrowserRouter>
      <ProtectedRoute path="/" component={Home} />
      <ProtectedRoute path="/recipeForm" component={Form} />
      <ProtectedRoute path="/profile" component={Profile} />
      <Menu />
    </BrowserRouter>
  );
}
