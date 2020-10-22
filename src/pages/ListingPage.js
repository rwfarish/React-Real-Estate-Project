import React from "react";
import axios from "axios";
import ListingCardContainer from "../components/ListingCardContainer";

export default function ListingPage({
  url,
  setListingsDb,
  jwtToken,
  listingsDb,
}) {
  React.useEffect(() => {
    console.log(window.localStorage.getItem("jwt"), "TOKEN");
    async function call() {
      let allListings = await axios.post(
        "http://localhost:4000/get-all-listings",
        {
          jwt: window.localStorage.getItem("jwt"),
        }
      );
      setListingsDb(allListings.data);
    }
    call();
  }, []);
  return (
    <div>
      <ListingCardContainer
        listings={listingsDb}
        jwt={window.localStorage.getItem("jwt")}
        setListingsDb={setListingsDb}
      />
    </div>
  );
}
