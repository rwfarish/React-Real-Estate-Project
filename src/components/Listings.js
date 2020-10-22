import React from "react";
import Navbar from "./Navbar";
import ListingPage from "../pages/ListingPage";

export default function Listings({ setListingsDb, jwtToken, listingsDb }) {
  return (
    <div>
      <Navbar />
      <ListingPage
        setListingsDb={setListingsDb}
        jwtToken={jwtToken}
        listingsDb={listingsDb}
      />
    </div>
  );
}
