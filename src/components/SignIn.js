import React from "react";
import axios from "axios";

export default function SignIn({ setJwtToken }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function login() {
    try {
      let jwtToken = await axios.post("http://localhost:4000/login", {
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
