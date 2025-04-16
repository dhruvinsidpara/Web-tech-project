import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", { email, password });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Sign In</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Email" 
          type="email" 
          fullWidth 
          margin="normal"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          margin="normal"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Sign In</Button>
      </form>
      <Typography variant="body2" style={{ marginTop: "10px" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
}

export default SignIn;