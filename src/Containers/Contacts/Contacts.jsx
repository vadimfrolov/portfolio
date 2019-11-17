import React from "react";
import "./Contacts.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const StyledButtonLeft = withStyles({
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


export default function Contacts() {
  return (
    <div className="container contacts">
      <div className="banner">
        <h1>Get in touch</h1>
        Got a question, or have some feedback for me?
        <br />
        vadimf74@ya.ru
        <br />
        <h3 className="phone">+7 982 357 62 98</h3>
        <div className="picWrapper">
          <a
            style={{ textDecoration: "none" }}
            href={`https://github.com/vadimfrolov`}
          >
            {" "}
            <img
              width="20%"
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png"
              alt="github logo"
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={`https://www.instagram.com/vadimfjs/`}
          >
            {" "}
            <img
              width="20%"
              src="http://www.transparentpng.com/thumb/instagram-logo-icon/85T6Z9-instagram-logo-clipart-transparent.png"
              alt="insta logo"
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={`https://vk.com/id202593348`}
          >
            <img
              width="20%"
              src="https://cdn.icon-icons.com/icons2/1121/PNG/512/1486147202-social-media-circled-network10_79475.png"
              alt="vk logo"
            />
          </a>
          <div>
            <Link style={{ textDecoration: "none" }} to={`/about`}>
              <StyledButtonLeft>About me</StyledButtonLeft>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`/`}>
              <StyledButtonLeft>Main</StyledButtonLeft>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
