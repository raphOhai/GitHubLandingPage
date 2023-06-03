import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from "react";
import { BlackBox, Center, Margin0Auto, MyText } from ".";

const Section1 = () => {
  return (
    <Stack spacing={2}>
      <BlackBox
        pl={2.5}
        pr={2.5}
        pt={1.5}
        pb={1.5}
        maxWidth={400}
        // maxHeight={50}
      >
        <Grid container spacing={2}>
          <Grid item lg="2" sm="2" xs={3}>
          
            <Margin0Auto>
              <img src="../../src/assets/pilot.svg" />
            </Margin0Auto>
          </Grid>
          <Grid item lg="8" sm={8} xs={7}>
            <Stack>
              <MyText
                sx={{
                  fontWeight: "bold",
                  fontSize: { lg: ".9rem", xs: ".7rem" },
                }}
              >
                Introducing GitHub Copilot X
              </MyText>
              <Typography
                sx={{
                  color: "#8B949E",
                  fontSize: { lg: ".9rem", sm: ".9rem", xs: ".7rem" },
                }}
              >
                Your AI pair programmer is leveling up
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg="2" sm="2" xs={2}>
            <Box>
              <Box pt={2}>
                <Center>
                  <img src="src/assets/Frame.svg" />
                </Center>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Stack></Stack>
      </BlackBox>
      <MyText
        sx={{
          fontSize: { lg: "3rem", sm: "3rem", xs: "2.4rem" },
          fontWeight: "bold",
        }}
      >
        Let's build from here
      </MyText>
      <Typography
        sx={{
          color: "#8B949E",
          fontSize: { lg: "2.5rem", sm: "2rem", xs: "1.5rem" },
        }}
      >
        Harnessed for productivity. Designed for collaboration. Celebrated for
        built-in security. Welcome to the platform developers love.
      </Typography>
      <Box></Box>
    </Stack>
  );
};

export default Section1;
