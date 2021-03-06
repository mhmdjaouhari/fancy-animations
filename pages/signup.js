import { useState } from "react";
import { CssBaseline, ThemeProvider, Paper, TextField, Button } from "@material-ui/core/";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "purple",
        },
      },
    },
  },
});

export default function Home() {
  const emptyFieldMessage = "Please fill out this field.";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isValid, setIsValid] = useState({ name: true, email: true, password: true });
  const handleInvalid = (e) => {
    e.preventDefault();
    setIsValid({ ...isValid, [e.target.name]: e.target.validity.valid });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsValid({ ...isValid, [e.target.name]: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ textAlign: "center" }}>
        <Button variant="text" disableElevation style={{ color: "#ccc" }}>
          Sign in
        </Button>
        <Button variant="text" disableElevation style={{ color: "#fff" }}>
          Sign up
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <Paper style={{ padding: 32, marginBottom: 16 }}>
          <TextField
            fullWidth
            required
            style={{ marginBottom: 16 }}
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onInvalid={handleInvalid}
            error={!isValid.name}
            helperText={!isValid.name ? emptyFieldMessage : " "}
          />
          <TextField
            fullWidth
            required
            style={{ marginBottom: 16 }}
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onInvalid={handleInvalid}
            error={!isValid.email}
            helperText={!isValid.email ? emptyFieldMessage : " "}
          />
          <TextField
            fullWidth
            required
            style={{ marginBottom: 16 }}
            type="password"
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onInvalid={handleInvalid}
            error={!isValid.password}
            helperText={!isValid.password ? emptyFieldMessage : " "}
          />
        </Paper>
        <Button fullWidth type="submit" variant="contained" disableElevation>
          Continue
        </Button>
      </form>
    </ThemeProvider>
  );
}
