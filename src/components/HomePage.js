import React from "react";
import axios from "axios";
import ListingCardContainer from "./ListingCardContainer";
import { StylesProvider } from "@material-ui/core";
import Navbar from "./Navbar";

export default function HomePage({ setListingsDb, jwtToken, listingsDb }) {
  async function showAllListings() {
    let allListings = await axios.post(
      "http://localhost:4000/get-all-listings",
      {
        jwt: jwtToken,
      }
    );
    setListingsDb(allListings.data);
  }
  async function showMyListings() {
    let myListings = await axios.post(
      "http://localhost:4000/get-your-listings",
      {
        jwt: jwtToken,
      }
    );
    setListingsDb(myListings.data);
  }

  return (
    <div style={styles.homeContainer}>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <ListingCardContainer
          listings={listingsDb}
          jwt={jwtToken}
          setListingsDb={setListingsDb}
        />
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    display: "flex",
  },
};
