import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ListingCard({ listing, jwt, setListingsDb }) {
  const classes = useStyles();

  const [isLiked, setIsLiked] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const resp = await axios.post("http://localhost:4000/get-my-listings", {
        jwt,
      });
      const likedListings = resp.data;
      likedListings.map((el) => {
        if (el.id == listing.id) {
          setIsLiked(true);
        }
      });
      console.log(isLiked);
    }
    fetchData();
  }, []);

  async function likeListing() {
    const listingid = listing.id;
    // const token = jwt;
    if (isLiked) {
      await axios.post("http://localhost:4000/delete-like", {
        listingid,
        jwt,
      });
      setIsLiked(false);
    } else {
      await axios.post("http://localhost:4000/like-listing", {
        listingid,
        jwt,
      });
      setIsLiked(true);
    }
  }

  return (
    <div style={styles.box}>
      <div style={styles.cardHeader}>
        <img src={listing.image} alt="listing" width="200px" />
        <div>
          <h1>{listing.address}</h1>
          <h3>{listing.price}</h3>
        </div>
      </div>
      <br />
      <div>{listing.bedAmount}</div>
      <div>{listing.bathAmount}</div>
      <div>{listing.squareFeet}</div>
    </div>
  );
}

const styles = {
  box: {
    position: "relative",
    width: "400px",
    padding: "50px",
    margin: "0 auto",
    backgroundColor: "#fff",
    webkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    mozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  cardHeader: {
    display: "flex",
  },
};
