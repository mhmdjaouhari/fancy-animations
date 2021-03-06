import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ArrowBack, FilterList } from "@material-ui/icons";

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
    img: "/vercel.svg",
    title: "Image",
    author: "author",
  },
  {
    img: "/vercel.svg",
    title: "Image",
    author: "author",
  },
  {
    img: "/vercel.svg",
    title: "Image",
    author: "author",
  },
  {
    img: "/vercel.svg",
    title: "Image",
    author: "author",
  },
];

export default function Categories() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarRoot}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
              <ArrowBack />
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              Discover
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
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
