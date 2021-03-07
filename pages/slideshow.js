import { Swipeable } from "react-deck-swiper";
import Link from "next/link";
import { useState } from "react";
import { CssBaseline, ThemeProvider, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@material-ui/core/";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const GlobalCss = withStyles({
  "@global": {
    ".MuiContainer-root": {
      height: "100vh",
    },
  },
})(() => null);

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#241332",
        },
      },
    },
  },
});

export default function Slideshow() {
  const [cards, setCards] = useState([
    { id: 0, image: "/zellige-1.jpg", title: "Marrakesh", description: "Morocco" },
    { id: 1, image: "/zellige-2.jpg", title: "Fez", description: "Morocco" },
    { id: 2, image: "/zellige-3.jpg", title: "Córdoba", description: "Spain" },
    { id: 2, image: "/zellige-4.jpg", title: "Granada", description: "Spain" },
  ]);
  const handleOnSwipe = (swipeDirection) => {
    const newCards = [...cards];
    const card = newCards.shift();
    newCards.push(card);
    setCards(newCards);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalCss />
      <motion.div
        initial={{ transform: "translateY(0vh)" }}
        exit={{ transform: "translateY(-100vh)" }}
        transition={transition}
        style={{ height: "100%", paddingTop: 32 }}>
        <div style={{ textAlign: "center" }}>
          {Array.from(Array(cards.length).keys()).map((i) => (
            <span key={i} style={{ color: cards[0].id === i ? "white" : "gray", fontSize: 20, userSelect: "none" }}>
              &bull;{" "}
            </span>
          ))}
        </div>
        <div style={{ height: "80vh" }}>
          <div style={{ position: "relative", background: "black" }}>
            {cards.slice().reverse().map((card, i) => (
              <Swipeable onSwipe={handleOnSwipe} key={card.id}>
                <Card
                  style={{
                    width: `calc(100% - ${5 * (cards.length - i)}px)`,
                    position: "absolute",
                    zIndex: cards.length - i,
                    background: "#fff",
                    marginTop: 5 + 5 * (cards.length - i),
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 64,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 64,
                  }}>
                  <CardActionArea>
                    <CardMedia image={card.image} style={{ height: "50vh" }} />
                    <CardContent style={{ padding: "48px 32px", maxHeight: "30vh" }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        <b>{card.title}</b>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Swipeable>
            ))}
          </div>
        </div>
        <div style={{ position: "fixed", bottom: 0, left: -16, right: -16 }}>
          <Link href="/signup">
            <Button
              variant="contained"
              fullWidth
              disableElevation
              color="secondary"
              style={{
                borderTopLeftRadius: 48,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                padding: 32,
                backgroundColor: "#352641",
              }}>
              Continue <ArrowForwardIcon />
            </Button>
          </Link>
        </div>
      </motion.div>
    </ThemeProvider>
  );
}
