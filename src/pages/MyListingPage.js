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
      let myListings = await axios.post("http://localhost:4000/get-my-listings", {
        jwt: window.localStorage.getItem("jwt"),
      });
      setListingsDb(myListings.data);
    }
    call();
  }, []);
  return (
    <div>
      <ListingCardContainer
        listings={listingsDb}
        jwt={jwtToken}
        setListingsDb={setListingsDb}
      />
    </div>
  );
}
