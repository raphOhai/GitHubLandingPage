import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
import { BlackBox, MyText } from ".";

const Section1 = () => {
  return (
    <Stack spacing={2}>
      <BlackBox pl={2.5} pr={2.5} pt={1.5} pb={1.5}>
        <img src="../../src/assets/pilot.svg" />
        <Stack>
          <MyText sx={{ fontWeight: "bold" }}>
            Introducing GitHub Copilot X
          </MyText>
          <Typography sx={{ color: "#8B949E" }}>
            Your AI pair programmer is leveling up
          </Typography>
        </Stack>
        <img src="src/assets/Frame.svg" />
      </BlackBox>
      <MyText sx={{ fontSize: "6rem", fontWeight: "bold" }}>
        Let's build from here
      </MyText>
      <Typography sx={{ color: "#8B949E", fontSize: "2rem" }}>
        Harnessed for productivity. Designed for collaboration. Celebrated for
        built-in security. Welcome to the platform developers love.
      </Typography>
      <Box></Box>
    </Stack>
  );
};

export default Section1;
