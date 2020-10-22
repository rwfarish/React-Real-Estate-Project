import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <div>
      <Link to="/listings">All Listings</Link>
      <Link to="/mylistings">My Listings</Link>
    </div>
  );
}
