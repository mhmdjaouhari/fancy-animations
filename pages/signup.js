import { useState, useEffect } from "react";
import { CssBaseline, ThemeProvider, Paper, TextField, Button } from "@material-ui/core/";
import { createMuiTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#F1F0F2",
        },
      },
    },
  },
});

export default function Home(props) {
  const router = useRouter();
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
    router.push("/splash");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <motion.div initial={{ opactity: 0 }} animate={{ opactity: 1 }} exit={{ opactity: 0 }} transition={transition}>
        <div
          style={{
            height: "40vh",
            borderBottomLeftRadius: 64,
            zIndex: -1,
            position: "absolute",
            left: 0,
            right: 0,
            backgroundColor: "#8A56AC",
          }}></div>
      </motion.div>
      <motion.div
        onAnimationStart={() => props.setCanScroll(false)}
        onAnimationComplete={() => props.setCanScroll(true)}
        initial={{ transform: "translateY(100vh)" }}
        animate={{ transform: "translateY(0vh)" }}
        exit={{ transform: "translateY(-100vh)" }}
        style={{ paddingTop: 32 }}
        transition={transition}>
        <div style={{ textAlign: "center" }}>
          <Button variant="text" disableElevation style={{ color: "#ccc" }}>
            Sign in
          </Button>
          <Button variant="text" disableElevation style={{ color: "#fff" }}>
            Sign up
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: 32, marginBottom: 16, borderRadius: 32 }}>
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
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            disableElevation
            style={{ borderRadius: 32, padding: 16, backgroundColor: "#8A56AC" }}>
            <b>Continue</b>
          </Button>
        </form>
      </motion.div>
    </ThemeProvider>
  );
}
