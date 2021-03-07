import React from "react";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ArrowBack, FilterList } from "@material-ui/icons";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

const GlobalCss = withStyles({
  "@global": {
    ".MuiContainer-root": {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
})(() => null);

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    flexGrow: 1,
  },
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

const tileData = [
  {
    img: "/zellige-1.jpg",
    title: "Marrakesh",
    subtitle: "Morocco",
  },
  {
    img: "/zellige-2.jpg",
    title: "Fez",
    subtitle: "Morocco",
  },
  {
    img: "/zellige-3.jpg",
    title: "Córdoba",
    subtitle: "Spain",
  },
  {
    img: "/zellige-4.jpg",
    title: "Granada",
    subtitle: "Spain",
  },
];

export default function Categories() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <div className={classes.appBarRoot}>
        <AppBar position="static" color="transparent">
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
              <Link href="/signup">
                <ArrowBack />
              </Link>
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              Categories
            </Typography>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
              <FilterList />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.gridListRoot}>
        <GridList cols={1}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={<b>{tile.title}</b>}
                subtitle={<span>{tile.subtitle}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </ThemeProvider>
  );
}
