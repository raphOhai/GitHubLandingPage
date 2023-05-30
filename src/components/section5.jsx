import { Box, Grid } from "@mui/material";
// import React from 'react'
import "./styles/terminal.css";
const Section5 = () => {
  return (
    <Box>
      <Grid container>
        <Grid lg={6}></Grid>
        <Grid lg={6}>
          <Box className="pictureBox">
            {/* <img className="picture2" src="src/assets/demo2.svg" />
            <img className="picture" src="src/assets/demo1.svg" /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section5;
