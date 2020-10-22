import React from "react";
import { Router } from "@reach/router";
import SignInPage from "../pages/SignInPage";

export default function PublicRoutes() {
  return (
    <Router>
      <SignInPage path="/" />
    </Router>
  );
}
