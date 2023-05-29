import "./App.css";
import { Box, Grid, InputBase, Typography } from "@mui/material";
import { BlackBox, Center, FlexBox, MyPadding, MyText } from "./components";
import { Stack } from "@mui/system";

// import starship form "../src/assets/starShips.svg"

function App() {
  return (
    <>
      <div className="hero">
        <img className="spaceShip" src="../src/assets/starsShips.svg" />

        <Box
          pt={60}
          sx={{
            paddingLeft: { lg: "15rem", sm: "3rem", xs: "1rem" },
            paddingRight: { lg: "15rem", sm: "3rem", xs: "1rem" },
          }}
        >
          <Center>
            <Stack spacing={2}>
              <BlackBox pl={2.5} pr={2.5} pt={1.5} pb={1.5}>
                {/* <Grid container>
                  <Grid item ></Grid>
                  <Grid item>
                    <Stack>

                    </Stack>
                  </Grid>
                </Grid> */}
                <img src="../src/assets/pilot.svg" />
                <Stack>
                  <MyText sx={{ fontWeight: "bold" }}>
                    Introducing GitHub Copilot X
                  </MyText>
                  <Typography sx={{ color: "#8B949E" }}>
                    Your AI pair programmer is leveling up
                  </Typography>
                </Stack>
                <img src="../src/assets/Frame.svg" />
              </BlackBox>
              <MyText sx={{ fontSize: "6rem", fontWeight: "bold" }}>
                Let's build from here
              </MyText>
              <Typography sx={{ color: "#8B949E", fontSize: "2rem" }}>
                Harnessed for productivity. Designed for collaboration.
                Celebrated for built-in security. Welcome to the platform
                developers love.
              </Typography>
              <Box></Box>
            </Stack>
          </Center>
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
                    <MyText sx={{ fontWeight: "bold" }}>
                      Sign up for GitHub
                    </MyText>
                  </Center>
                </Box>
              </FlexBox>
            </Grid>
            {/* <Grid lg={}>
              <Box sx={{ Width: "3px", backgroundColor: "#30363D" }}></Box>
            </Grid> */}
            <Grid lg={6}>
              <Center>
                <Box
                  maxWidth={300}
                  p={1.2}
                  sx={{ border: "2px solid #6E40C9", borderRadius: "5px" }}
                >
                  <Center>
                    <MyText sx={{ fontWeight: "bold" }}>
                      start Enterprise trial
                    </MyText>
                  </Center>
                </Box>
              </Center>
            </Grid>
          </Grid>
        </Box>
        <img className="strock" src="../src/assets/strock.svg" />
      </div>
    </>
  );
}

export default App;
