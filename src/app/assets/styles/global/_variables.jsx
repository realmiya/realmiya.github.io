"use client"; // This is a client component

import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
// import Alegre Sans Regular NC from "../../fonts/alegre-sans-nc.woff";
const theme = createTheme({
    palette: {
        abbey: { main: "#55565a" },
        white: { main: "#fff" },
        jumbo: { main: "#77777a" },
        manatee: { main: "#99999a" },
        nobel: { main: "#b3b2b1" },
        alto: { main: "#d9d8d8" },
        type: "dark",
        action: {
            selected: "#E7A615",
            hover: "#FFD371",
            disabled: "#9B9B9B",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            // Alegre Sans Regular NC,
        ].join(","),
    },
});

export default theme;
