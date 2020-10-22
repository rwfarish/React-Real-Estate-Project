import React from "react";
import axios from "axios";

export default function SignUp({ setJwtToken }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function register() {
    try {
      let jwtToken = await axios.post("http://localhost:4000/", {
        email,
        password,
      });
      console.log(jwtToken);
      window.localStorage.setItem("jwt", jwtToken.data.jwt);
      setJwtToken(jwtToken.data.jwt);
    } catch (error) {
      console.log(error);
    }
  }
}