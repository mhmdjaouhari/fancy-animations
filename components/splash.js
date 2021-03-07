import { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core/";
import { createMuiTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "white",
        },
      },
    },
  },
});

const Splash = (props) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = (e) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => {
      router.push("/categories");
    }, 3000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Confetti height={height} width={width} />
      <CssBaseline />
      <motion.div
        onAnimationStart={() => props.setCanScroll(false)}
        onAnimationComplete={() => props.setCanScroll(true)}
        initial={{ transform: "translateY(100vh)" }}
        animate={{ transform: "translateY(0vh)" }}
        exit={{ transform: "translateY(-100vh)" }}
        transition={transition}>
        <h1 style={{ marginTop: "45vh", textAlign: "center" }}>
          <b>Bienvenue sur Bouge !</b>
        </h1>
      </motion.div>
    </ThemeProvider>
  );
};

export default Splash;
