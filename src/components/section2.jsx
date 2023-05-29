// import React from "react";
import { Center, FlexBox, MyText } from ".";
import { Box, Grid, InputBase } from "@mui/material";

const Section2 = () => {
  return (
    <Grid container>
      <Grid item lg={6}>
        <FlexBox sx={{ borderRadius: "5px" }}>
          <Box
            pl={1.5}
            pr={9}
            pt={1}
            pb={1}
            sx={{ backgroundColor: "white", borderRadius: "5px 0 0 5px" }}
          >
            <InputBase placeholder="Email Addres" />
          </Box>
          <Box
            pl={1.5}
            pr={1.5}
            sx={{
              backgroundColor: "#6E40C9",
              borderRadius: "0 5px  5px 0",
            }}
          >
            <Center mt={1.5} sx={{ textAlign: "center" }}>
              <MyText sx={{ fontWeight: "bold" }}>Sign up for GitHub</MyText>
            </Center>
          </Box>
        </FlexBox>
      </Grid>
      {/* <Grid lg={}>
      <Box sx={{ Width: "3px", backgroundColor: "#30363D" }}></Box>
    </Grid> */}
      <Grid lg={6}>
        <Box
          maxWidth={200}
          p={1.2}
          pl={4}
          sx={{
            border: "2px solid #6E40C9",
            borderRadius: "5px",
            display: "flex",
            textAlign: "center",
          }}
        >
          <Center>
            <FlexBox sx={{ gap: "1rem" }}>
              <MyText sx={{ fontWeight: "bold" }}>
                start Enterprise trial
              </MyText>
              <img src="../src/assets/Frame.svg" />
            </FlexBox>
          </Center>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Section2;
