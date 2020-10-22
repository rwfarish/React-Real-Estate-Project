import React from "react";
import listingsDb from "./fakeDb/listingsDb";
import ListingCard from "./components/ListingCard";
import SignIn from "./components/SignIn";
import SignInPage from "./pages/SignInPage";
import { Router } from "@reach/router";
import PublicRoutes from "./components/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [jwtToken, setJwtToken] = React.useState("");
  const [listingsDb, setListingsDb] = React.useState([]);
  React.useEffect(() => {
    if (window.localStorage.getItem("jwt") != "") {
      setJwtToken(window.localStorage.getItem("jwt"));
    }
  }, []);
  console.log(!window.localStorage.getItem("jwt"));
  return (
    <>
      {!window.localStorage.getItem("jwt") ? (
        <PublicRoutes></PublicRoutes>
      ) : (
        <PrivateRoutes
          setListingsDb={setListingsDb}
          jwtToken={jwtToken}
          listingsDb={listingsDb}
        ></PrivateRoutes>
      )}
    </>
  );
}

export default App;
