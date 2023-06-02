// import React from 'react'

import { Box, Stack, Typography } from "@mui/material";
import {  MyText,  } from ".";

const Section9 = () => {
  return (
    <Box mt={20}>
      <Stack>
        <Typography sx={{ color: "#FFA28B" }}>Did you know</Typography>
        <Typography sx={{ fontSize: { lg: "3rem", sm: "2rem", xs: "2rem" }, color: "#FFA28B" }}>
          80% reduction
        </Typography>
        <MyText sx={{ fontSize: { lg: "3rem", sm: "2rem", xs: "2rem" }}}>in onboarding time with GitHub1</MyText>
      </Stack>

  
    </Box>
  );
};

export default Section9;
