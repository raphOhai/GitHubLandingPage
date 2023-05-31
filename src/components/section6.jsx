import { Box, Stack, Typography } from "@mui/material";
// import React from 'react'
import "./styles/terminal.css";
import { MyText } from ".";
const Section6 = () => {
  return (
    <>
      <Box mt={9}>
        <Stack spacing={2}>
          <Typography className="maintext">Did you know?</Typography>
          <Typography className="maintext" sx={{ fontSize: "3rem" }}>
            22% increase
          </Typography>
          <Box maxWidth={500}>
            <MyText sx={{ fontSize: "2rem" }}>
              in developer productivity after three years with GitHub1
            </MyText>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Section6;
