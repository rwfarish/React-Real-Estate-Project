import React from "react";
import { Router } from "@reach/router";
import Listings from "./Listings";
import MyListingPage from "../pages/MyListingPage";
import HomePage from "./HomePage";

export default function PrivateRoutes({ setListingsDb, jwtToken, listingsDb }) {
  return (
    <Router>
      <HomePage
        path="/home"
        setListingsDb={setListingsDb}
        jwtToken={jwtToken}
        listingsDb={listingsDb}
      />
      <Listings
        path="/listings"
        setListingsDb={setListingsDb}
        jwtToken={jwtToken}
        listingsDb={listingsDb}
      />

      <MyListingPage
        path="/likedlistings"
        setListingsDb={setListingsDb}
        jwtToken={jwtToken}
        listingsDb={listingsDb}
      />
    </Router>
  );
}
