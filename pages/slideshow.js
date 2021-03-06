import { Swipeable } from "react-deck-swiper";
import Link from "next/link";
import { useState } from "react";
import { CssBaseline, ThemeProvider, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@material-ui/core/";
import { createMuiTheme } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "MidnightBlue",
        },
      },
    },
  },
});

export default function Slideshow() {
  const [cards, setCards] = useState([
    { id: 0, image: "/vercel.svg", title: "Discover", description: "blabla blabla blabla blabla blabla" },
    { id: 1, image: "/vercel.svg", title: "Explore", description: "blabla blabla blabla blabla blabla" },
    { id: 2, image: "/vercel.svg", title: "Practise", description: "blabla blabla blabla blabla blabla" },
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
      <div style={{ textAlign: "center" }}>
        {Array.from(Array(cards.length).keys()).map((i) => (
          <span style={{ color: cards[0].id === i ? "white" : "gray", fontSize: 20, userSelect: "none" }}>&bull; </span>
        ))}
      </div>
      <div style={{ height: "80vh" }}>
        <div style={{ position: "relative", background: "black" }}>
          {cards.map((card, i) => (
            <Swipeable onSwipe={handleOnSwipe} key={card.id}>
              <Card
                style={{
                  width: "100%",
                  position: "absolute",
                  zIndex: cards.length - i,
                  background: "#fff",
                  marginTop: 5 + 5 * (cards.length - i),
                }}>
                <CardActionArea>
                  <CardMedia image={card.image} style={{ height: "50vh" }} />
                  <CardContent style={{ padding: "48px 32px", maxHeight: "30vh" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
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
      <div style={{ padding: 16, textAlign: "center" }}>
        <Link href="/signup">
          <Button variant="contained" disableElevation>
            Continue <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    </ThemeProvider>
  );
}
