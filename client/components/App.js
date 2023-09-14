import React, { useState, useEffect } from "react";
import NormalButton from "./NormalButton.js";
import Navbar from "./Navbar/Navbar.js";
import { Outlet } from "react-router";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import Header from "./Header.js/header.js";
import CssBaseline from "@mui/material/CssBaseline";

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, " ");
    setTitle(parsedTitle);
  }, [location]);

  return (
    <CssBaseline>
      <Grid container>
        <Navbar />
        <Header title={title} />
        <Outlet />
      </Grid>
    </CssBaseline>
  );
}
