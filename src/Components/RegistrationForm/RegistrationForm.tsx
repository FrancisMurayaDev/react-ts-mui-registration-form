import React, { useState } from "react";

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Make sure your passwords match!");
      return;
    } else (
      alert("Teach2Give Registration Successful!")
    )
    // console.log("Form submitted:", form);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
          <Typography variant="h5" gutterBottom>
            Teach2Give Registration Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
              Register
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default RegistrationForm;
