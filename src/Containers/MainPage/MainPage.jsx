import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typist from "react-typist";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import "./MainPage.css";

const StyledButtonLeft = withStyles({
  root: {
    background: 'transparent',
    borderRadius: 3,
    border: '4px solid currentColor',
    color: '#40E0D0',
    height: 48,
    padding: '0 30px',
    margin: '0 30px',
    boxShadow: 'none',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


const StyledButtonRight = withStyles({
  root: {
    background: 'transparent',
    borderRadius: 3,
    border: '4px solid currentColor',
    color: '#FF6F61',
    height: 48,
    padding: '0 30px',
    margin: '0 30px',
    boxShadow: 'none',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);



class MainPage extends Component {
  render() {
    return (
      <div className="container mainPage">
        <div className="bannerMain">
          {" "}
          <Typist>Hello, My Name Is Vadim</Typist>
          <div>
          <Link style={{ textDecoration: 'none' }} to={`/about`}><StyledButtonLeft >About me</StyledButtonLeft></Link>
          <Link style={{ textDecoration: 'none' }} to={`/contacts`}> <StyledButtonRight>Contacts</StyledButtonRight></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
