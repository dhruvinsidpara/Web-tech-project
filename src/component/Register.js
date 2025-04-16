import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", { name, email, password });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Full Name" 
          fullWidth 
          margin="normal"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
      </form>
      <Typography variant="body2" style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/signin">Sign In</Link>
      </Typography>
    </Container>
  );
}

export default Register;