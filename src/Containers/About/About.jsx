import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./About.css";

const StyledButtonLeft = withStyles({
  root: {
    background: "transparent",
    borderRadius: 3,
    border: "4px solid currentColor",
    color: "black",
    height: 48,
    padding: "0 30px",
    margin: "0 30px",
    boxShadow: "none"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const StyledButtonRight = withStyles({
  root: {
    background: "transparent",
    borderRadius: 3,
    border: "4px solid currentColor",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "0 30px",
    boxShadow: "none"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const useStyles = makeStyles({
  card: {
    maxWidth: "45vw"
  },
  media: {
    height: "15vh"
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div className="container about">
      <article className="child leftPart">
        <h1>About me </h1>
        <p>I'm a creative <span className="blueW">full stack developer</span>, based in <span className="redW">Moscow</span> with a passion for thoughtful UI design, collaboration and timing. I’ve always sought out opportunities and challenges that are meaningful to me. </p>
        <iframe
        title="playlist"
          width="100%"
          className="playerContainer"
          height="350"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/920865406&color=%233e1604&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div>
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <StyledButtonLeft className="linkButton">Main</StyledButtonLeft>
          </Link>
        </div>
      </article>
      <article className="child rightPart">
 
      
        <h1>Some of my projects:</h1>
        <div className="cardWrapper">
        
        <div className="cardEx">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.pinimg.com/originals/7d/d9/e4/7dd9e4be17643679dbf82bd05ff1db01.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Unplugged
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Network that helps you to find concerts, listen to the music
                    and talk with fans
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions alignItems="center">
                <a
                  style={{ textDecoration: "none" }}
                  href={`https://unpluggedelbrus.herokuapp.com/`}
                >
                  <Button  size="large" color="black">
                    Check site
                  </Button>
                </a>
              </CardActions>
            </Card>
            </div>

            <div className="cardEx">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.pinimg.com/originals/f0/eb/67/f0eb6701358fbc333e260fd7533790d9.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Parashoot
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Social network CRUD prototype prepared for the company
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  style={{ textDecoration: "none" }}
                  href={`https://socialforcustomer.herokuapp.com/main`}
                >
                  <Button size="large" color="black">
                    Check site
                  </Button>
                </a>
              </CardActions>
            </Card>
            </div>
       
        </div>
        <h2>Tech:</h2>
        <div className="picWrapper">
          <img
            width="15%"
            src="https://miro.medium.com/max/800/1*VeM-5lsAtrrJ4jXH96h5kg.png"
            alt="react logo"
          />
          <img
            width="15%"
            src="https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png"
            alt="git logo"
          />
          <img
            width="15%"
            src="https://doc.octoperf.com/monitoring/create-connection/mongodb/img/mongodb-logo.png"
            alt="mongoDB logo"
          />

          <img
            width="15%"
            src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
            alt="node logo"
          />
        </div>

        <div>
          {" "}
          <Link style={{ textDecoration: 'none' }} to={`/contacts`}><StyledButtonRight className="linkButton">Contacts</StyledButtonRight></Link>
        </div>
      </article>
    </div>
  );
}
