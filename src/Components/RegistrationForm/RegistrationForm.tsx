import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";

const RegistrationHero: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registered!");
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "white", p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "100%",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Left side content */}
        <Box sx={{ flex: 1, pl: { md: 6 } }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Build Your Future with Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 18, color: "#555" }}>
            Join a community of creators, learners, and doers. It all starts
            with one step — sign up today and unlock the possibilities.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <img
              src="../../../public/t2g.png"
              alt="hero"
              style={{ width: "80%", maxWidth: 400 }}
            />
          </Box>
        </Box>

        {/* Right side form */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 5,
              width: "100%",
              maxWidth: 450,
              borderRadius: 5,
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
              textAlign="center"
            >
              Create Your Account
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                sx={{ mb: 4 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "#2f3cc9",
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": { background: "#1e2bbf" },
                }}
              >
                Sign Up
              </Button>

              <Box mt={3} textAlign="center">
                <Typography variant="body2" gutterBottom>
                  or continue with
                </Typography>
                <IconButton sx={{ color: "#db4437" }}>
                  <GoogleIcon />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationHero;
