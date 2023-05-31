import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from 'react'
import { Center, Margin0Auto, grayText, section7Box } from ".";
import Copilotdemo from "./copilotdemo";

const Section7 = () => {
  return (
    <Box mt={8}>
      <Stack spacing={4}>
        <Box sx={section7Box} ml={12} mr={12}>
          <Grid container>
            <Grid item lg={6}>
              <Margin0Auto pt={6} pb={6} maxWidth={500}>
                <Stack spacing={5}>
                  <Typography sx={{ color: "#8B949E", fontSize: "1.5rem" }}>
                    <span style={{ color: "white" }}>GitHub Copilot </span>
                    is your AI pair programmer that empowers you to complete
                    tasks 55% faster by turning natural language prompts into
                    coding suggestions.
                  </Typography>

                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Check out GitHub Codespaces
                    </Typography>
                    <img src="src/assets/Frame.svg" />
                  </Box>
                </Stack>
              </Margin0Auto>
            </Grid>
            <Grid item lg={6}>
              <Margin0Auto pt={6} pb={6} maxWidth={600}>
                <Copilotdemo />
              </Margin0Auto>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={0}>
          <Grid item lg={6}>
            <Box sx={section7Box} ml={12} mr={2} maxHeight={700}>
              <Margin0Auto pt={6} pb={6} maxWidth={500}>
                <Stack spacing={5}>
                  <Typography sx={{ color: "#8B949E", fontSize: "1.5rem" }}>
                    <span style={{ color: "white" }}>GitHub Copilot </span>
                    is your AI pair programmer that empowers you to complete
                    tasks 55% faster by turning natural language prompts into
                    coding suggestions.
                  </Typography>

                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Check out GitHub Codespaces
                    </Typography>
                    <img src="src/assets/Frame.svg" />
                  </Box>
                </Stack>
              </Margin0Auto>
              <Box>
                <img className="responsive" src="src/assets/demoImage1.svg" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={section7Box} mr={12} ml={2} maxHeight={700}>
              <Margin0Auto pt={6} pb={6} maxWidth={500}>
                <Stack spacing={5}>
                  <Typography sx={{ color: "#8B949E", fontSize: "1.5rem" }}>
                    <span style={{ color: "white" }}>GitHub Copilot </span>
                    is your AI pair programmer that empowers you to complete
                    tasks 55% faster by turning natural language prompts into
                    coding suggestions.
                  </Typography>

                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Check out GitHub Codespaces
                    </Typography>
                    <img src="src/assets/Frame.svg" />
                  </Box>
                </Stack>
              </Margin0Auto>
              <Box>
                <img className="responsive" src="src/assets/demoImage2.svg" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Section7;
