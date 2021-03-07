import "../styles/globals.css";
import { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const [canScroll, setCanScroll] = useState(false);
  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);
  return (
    <Container maxWidth="xs">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          onAnimationStart={() => setCanScroll(false)}
          onAnimationComplete={() => setCanScroll(true)}
          key={router.route}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          style={{ height: "100%" }}
          exit={{
            opacity: 0,
          }}>
          <Component {...pageProps} setCanScroll={setCanScroll} />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default MyApp;
