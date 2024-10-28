import { extendTheme } from "@chakra-ui/react";

export const themeLight = extendTheme({
  colors: {
    brand: {
      50: "#e3f2f9",
      100: "#c5e4f3",
      200: "#a2d4ec",
      300: "#7ac1e4",
      400: "#47a9da",
      500: "#0088cc",
      600: "#007ab8",
      700: "#006ba1",
      800: "#005885",
      900: "#003f5e",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.800",
        backgroundColor: "brand.50",
        lineHeight: "tall",
        height: "100%",
      },
      body: {
        padding: 8,
      },
      "#root": {
        height: "100%",
        maxW: "1200px",
        margin: "auto",
      },
      a: {
        color: "white",
        textDecoration: "underline",
        padding: 2,
      },
    },
  },
});
