import React from "react";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";


const App = () => {
  return (
    <>
      <NavBar />

      <Grid container spacing={2} alignItems="center">
        <SideBar />
        <Grid item xs={12} md={10}>
          
        </Grid>
      </Grid>

    </>
  );
}

export default App;
