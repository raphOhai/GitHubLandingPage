// import React from "react";
import { Center, FlexBox, MyText } from ".";
import { Box, Grid, InputBase, Stack } from "@mui/material";

const Section2 = () => {
  return (
    <Grid container spacing={.5}>
      <Grid item lg={8} sm={7} xs={12}>
      <Box
        
        p={1.2}
        
        sx={{
          border: "2px solid #6E40C9",
          borderRadius: "5px",
          display: "flex",
          textAlign: "center",
          marginTop:{lg:"0rem", sm:"0rem", xs:"1rem"}
        }}
      >
        <Center>
          <Stack direction="row" sx={{ gap: "1rem" }}>
            <MyText sx={{ fontWeight: "bold" }}>
              start Enterprise trial
            </MyText>
            <img src="../src/assets/Frame.svg" />
          </Stack>
        </Center>
      </Box>
      </Grid>
      <Grid item lg={3} sm={5} xs={12}>
      <Box
        
        p={1.2}
     
        sx={{
          border: "2px solid #6E40C9",
          borderRadius: "5px",
          display: "flex",
          textAlign: "center",
          marginTop:{lg:"0rem", sm:"0rem", xs:"1rem"}
        }}
      >
        <Center>
          <Stack direction="row" sx={{ gap: "1rem" }}>
            <MyText sx={{ fontWeight: "bold" }}>
              start Enterprise trial
            </MyText>
            <img src="../src/assets/Frame.svg" />
          </Stack>
        </Center>
      </Box>
      </Grid>

     
    </Grid>
  );
};

export default Section2;
