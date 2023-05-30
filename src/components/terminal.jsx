import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Terminal = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#30363D",
          border: "1px solid #6E7681",
          padding: "3rem",
          borderRadius: "10px",
        }}
        p={6}
        mt={4}
        ml={12}
        mr={12}
      >
        <Grid container>
          <Grid item>{/* <Box></Box> */}</Grid>
          <Grid item>
            <Typography className="maintext">dshbcsdhvdhfvbdfjvbjh</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Terminal;
