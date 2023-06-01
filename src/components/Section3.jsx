import { Grid, Stack, Typography } from "@mui/material";
// import React from "react";
import { Center } from ".";

const Section3 = () => {
  return (
    <Stack spacing={1}>
      <Typography sx={{color:"#6E7681"}}>Trusted by the word's leading organizations</Typography>
      <Grid container spacing={3}>
        <Grid item lg={2}>
          <Center pr={2}>
            <img src="src/assets/Auto Layout Horizontal (1).svg" />
          </Center>
        </Grid>
        <Grid item lg={2}>
          <Center pl={4}>
            <img src="src/assets/Auto Layout Horizontal (3).svg" />
          </Center>
        </Grid>
        <Grid item lg={2}>
          <Center pr={2}>
            <img src="src/assets/Auto Layout Horizontal (4).svg" />
          </Center>
        </Grid>
        <Grid item lg={2}>
          <Center pl={5}>
            <img src="src/assets/Frame (5).svg" />
          </Center>
        </Grid>
        <Grid item lg={2}>
          <Center pr={2}>
            <img src="src/assets/Frame (6).svg" />
          </Center>
        </Grid>
        <Grid item lg={2}>
          <Center pl={2}>
            <img src="src/assets/Frame (7).svg" />
          </Center>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Section3;
