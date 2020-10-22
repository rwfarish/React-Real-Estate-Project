import React from "react";
import axios from "axios";
import ListingCard from "./ListingCard";

export default function ListingCardContainer({ listings, jwtToken, setListingsDb }) {
  return (
    <div style={styles.cardContainer}>
      {listings.map((currentListing) => (
        <ListingCard listing={currentListing} jwt={jwtToken} setListingsDb={setListingsDb} />
      ))}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "15px",
  },
};