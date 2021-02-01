import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Tab } from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 460,
  },
 
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          MERN BLOG
            <CodeIcon/>
          </Typography>

          <Tab label="Home" to ='./Home' component={Link}/>
          <Tab label="AddUser" to ='./Add' component={Link}/>
          <Tab label="List" to ='./List' component={Link}/>
          <Tab label="AddPost" to ='./AddPost' component={Link}/>
          <Tab label="PostsList" to ='./PostList' component={Link}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
