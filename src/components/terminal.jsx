import { Box, Grid, Stack, Typography } from "@mui/material";
import LeftArrow from "../assets/leftArrow";
import RightArrow from "../assets/rightArrow";
import Lock from "../assets/lock";
import Retry from "../assets/retry";
import { Center, MyText } from ".";
import Add from "../assets/add";
import Piemenu from "../assets/piemenu";
// import React from "react";
import "./styles/terminal.css";
import Codedemo from "./codedemo";
const Terminal = () => {
  const MainTerminalStyles = {
    backgroundColor: "#161B22",
    border: "2px solid #30363D",
    // padding: "3rem",
    overflow: "hidden",
    borderRadius: "10px",
  };
  const RightBoxStyles = {
    borderLeft: "1px solid #30363D",
    alignItems: "center",
    // display: "flex",
    // justifyContent: "space-between",
  };
  const TerminalSearchBarStyles = {
    backgroundColor: "#0D1117",
    border: "1px solid #30363D",
    display: "flex",
    gap: "4rem",
    padding: ".2rem",
    justifyContent: "space-between",
    borderRadius: "6px",
  };
  const greyTextStyles = {
    color: "#6E7681",
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box sx={MainTerminalStyles} mt={4} ml={12} mr={12}>
        <Box
          sx={{
            borderBottom: "1px solid #30363D",
            display: "flex",
            justifyContent: "space-between",
          }}
          p={2}
        >
          <Stack direction="row" spacing={3}>
            <LeftArrow />
            <RightArrow />
          </Stack>

          <Box sx={TerminalSearchBarStyles}>
            <Center mt={0.3} pl={1} pt={0.3}>
              <Lock />
            </Center>

            <MyText>mona-github-github-g59jpq2w5w7.github.dev</MyText>
            <Center mt={0.3} pr={1} pt={0.3}>
              <Retry />
            </Center>
          </Box>

          <Add />
        </Box>
        <Grid container>
          <Grid item lg={1}>
            <Center p={5}>
              <Piemenu />
            </Center>
            {/* <Box p={3} sx={RightBoxStyles}></Box> */}
          </Grid>
          <Grid item lg={5} sx={{ borderLeft: "1px solid #30363D" }}>
            <Stack>
              <Box
                sx={{
                  backgroundColor: "#0D1117",
                  overflow: "hidden",
                  height: "1",
                }}
              >
                <Box pl={4}>
                    <Codedemo/>
                </Box>
              </Box>
              <Box>
                <Box p={2} sx={{ display: "flex", gap: "3rem" }}>
                  <MyText>Terminal</MyText>
                  <Typography sx={greyTextStyles}>Output</Typography>
                  <Typography sx={greyTextStyles}>Problem</Typography>
                </Box>
                <Box pl={2} mb={4}>
                  <Stack spacing={1}>
                    <MyText>
                      <pre>
                        <span style={{ color: "#6E7681" }}>
                          [09:43:36] starting{" "}
                        </span>
                        <span style={{ color: "#58A6FF" }}>
                          "watch-extension:vscode-api-tests"...
                        </span>
                      </pre>
                    </MyText>
                    <MyText>
                      <pre>
                        <span style={{ color: "#6E7681" }}>
                          [09:43:36] starting{" "}
                        </span>
                        <span style={{ color: "#58A6FF" }}>
                          "watch-extension:vscode-api-tests"...
                        </span>
                      </pre>
                    </MyText>
                    <MyText>
                      <pre>
                        <span style={{ color: "#6E7681" }}>
                          [09:43:36] starting{" "}
                        </span>
                        <span style={{ color: "#58A6FF" }}>
                          "watch-extension:vscode-api-tests"...
                        </span>
                      </pre>
                    </MyText>

                    <MyText>
                      <pre>
                        <span style={{ color: "#6E7681" }}>
                          [09:43:36] starting{" "}
                        </span>
                        <span style={{ color: "#58A6FF" }}>
                          "watch-extension:vscode-api-tests"...
                        </span>
                      </pre>
                    </MyText>

                    <MyText>
                      <pre>
                        <span style={{ color: "#6E7681" }}>
                          [09:43:36] starting{" "}
                        </span>
                        <span style={{ color: "#58A6FF" }}>
                          "watch-extension:vscode-api-tests"...
                        </span>
                      </pre>
                    </MyText>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{ backgroundColor: "#040D21", borderLeft: "2px solid #30363D" }}
          >
            <Box p={1}>
              <Center>
                <img className="planet" src="src/assets/planet.svg" />
              </Center>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Terminal;
