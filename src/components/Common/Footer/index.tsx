import React from "react";
import "./footer.css";
import { Grid } from "@mui/material";
import {
  leftSupportLink,
  leftAboutLink,
  rightSupportLink,
  rightAboutLink,
} from "./footer-link";

import { RightOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <Grid container spacing={3}>
        <Grid item sm={5} xs={12}>
          <div className="support-container">
            <p className="support-title">Support</p>
            <Grid container spacing={3} className="support-content">
              <Grid item sm={6} xs={6}>
                {leftSupportLink.map((link) => {
                  return (
                    <div key={link.id} className="left-support-links-container">
                      <a className="support-link" href={link.link}>
                        {link.name}
                      </a>
                      ;
                    </div>
                  );
                })}
              </Grid>
              <Grid item sm={6} xs={6}>
                {rightSupportLink.map((link) => {
                  return (
                    <div
                      key={link.id}
                      className="right-support-links-container"
                    >
                      <a className="support-link" href={link.link}>
                        {link.name}
                      </a>
                      ;
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={3} xs={12}>
          <div className="about-container">
            <p className="about-title">About</p>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={6}>
                {leftAboutLink.map((link) => {
                  return (
                    <div key={link.id}>
                      <a className="support-link" href={link.link}>
                        {link.name}
                      </a>
                      ;
                    </div>
                  );
                })}
              </Grid>
              <Grid item sm={6} xs={6}>
                {rightAboutLink.map((link) => {
                  return (
                    <div key={link.id}>
                      <a className="support-link" href={link.link}>
                        {link.name}
                      </a>
                      ;
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className="sign-up-container">
            <p className="sign-up-title">Newsletter sign up</p>
            <div className="sign-up-content">
              <input
                className="sign-up-input"
                type="text"
                placeholder="Email"
              />
              <button className="sign-up-button">
                <RightOutlined />
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
