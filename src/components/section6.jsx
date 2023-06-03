import { Box, Stack, Typography } from "@mui/material";
// import React from 'react'
import "./styles/terminal.css";
import { MyText } from ".";
const Section6 = () => {
  return (
    <>
      <Box marginLeft={{sx:"0rem", sm:"4rem",}} >
        <Stack spacing={2}>
          <Typography className="maintext">Did you know?</Typography>
          <Typography
            className="maintext"
            sx={{ fontSize: { lg: "2rem", sm: "1.3rem", xs: "1.5rem" } }}
          >
            22% increase
          </Typography>
          <Box maxWidth={500}>
            <MyText sx={{ fontSize: { lg: "2rem", sm: "1.3rem", xs: "1.5rem" } }}>
              in developer productivity after three years with GitHub1
            </MyText>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Section6;
