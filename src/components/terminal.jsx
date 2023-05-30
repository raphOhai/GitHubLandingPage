import { Box, Grid, Stack, Typography } from "@mui/material";
import LeftArrow from "../assets/leftArrow";
import RightArrow from "../assets/rightArrow";
import Lock from "../assets/lock";
import Retry from "../assets/retry";
import { Center, MyText } from ".";
import Add from "../assets/add";
import Piemenu from "../assets/piemenu";
// import React from "react";
import "./styles/terminal.css"
const Terminal = () => {
  const MainTerminalStyles = {
    backgroundColor: "#161B22",
    border: "1px solid #30363D",
    // padding: "3rem",
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

  return (
    <Box>
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
            <Box
              sx={{
                backgroundColor: "#0D1117",
                overflow: "scroll",
                height: "1",
              }}
            >
              <Stack>
                <Typography className="maintext">
                  <span>
                    <pre>&lt;div class="container"&gt;</pre>
                    <pre>
                      &lt;div "d-flex flex-justify-center flex-lg-justify-end
                      color-bg-default&lt;div&gt;
                    </pre>
                    <pre>&lt;div&gt;</pre>
                  </span>
                </Typography>
                <Typography className="maintext">
                  <span>
                    <pre>&lt;div class="container"&gt;</pre>
                    <pre>
                      &lt;div "d-flex flex-justify-center flex-lg-justify-end
                      color-bg-default&lt;div&gt;
                    </pre>
                    <pre>&lt;div&gt;</pre>
                  </span>
                </Typography>
                <Typography className="maintext">
                  <span>
                    <pre>&lt;div class="container"&gt;</pre>
                    <pre>
                      &lt;div "d-flex flex-justify-center flex-lg-justify-end
                      color-bg-default&lt;div&gt;
                    </pre>
                    <pre>&lt;div&gt;</pre>
                  </span>
                </Typography>
              </Stack>
            </Box>
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
