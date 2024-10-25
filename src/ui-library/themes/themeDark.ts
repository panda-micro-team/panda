import { extendTheme } from "@chakra-ui/react";

export const themeDark = extendTheme({
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
        backgroundColor: "brand.800",
        lineHeight: "tall",
      },
      a: {
        color: "darkgreen",
        textDecoration: "underline",
        padding: 8,
      },
    },
  },
});
