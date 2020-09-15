import React from "react";
import "../../styles/app.css";
import Theme from "../theme";
import {
  ThemeProvider,
  CSSReset,
  DarkMode,
  ColorModeProvider,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <CSSReset />
        <Component />
      </ThemeProvider>
    );
  }
}

export default MyApp;
