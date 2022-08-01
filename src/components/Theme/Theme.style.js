import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    text: "#ffffff",
    positive: "#93FF9D",
    negative: "#AFDBD2",
  },
  bg: {
    image: "rgba(255, 255, 255, 0.1)",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    hero: "3rem",
    xLarge: "1.75rem", 
    large: "1.5rem", 
    medium: "1.125rem", 
    small: "1rem", 
    xSmall: "0.875rem",  
    "default": "1.125rem" 
  },
  spacings: {
    m0: "0px",
    m8: "8px",
    m16: "16px",
    m24: "24px",
    m32: "32px",
    m40: "40px",
    m48: "48px",
    m80: "80px",
    m120: "120px",
  },
  opacity: {
    light: "95%",
    medium: "90%",
    strong: "85%",
  }

};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;