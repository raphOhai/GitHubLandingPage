import "./App.css";
import { Box, Grid, InputBase, Typography } from "@mui/material";
import { BlackBox, Center, FlexBox, MyPadding, MyText } from "./components";
import { Stack } from "@mui/system";
import Section1 from "./components/Section1";
import Section2 from "./components/section2";
import Section3 from "./components/Section3";
import Strock from "./assets/strock";

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
          <Stack spacing={6}>
            <Center>
              <Section1 />
            </Center>
            <Box>
              <Section2 />
            </Box>
            <Box>
              <Section3 />
            </Box>
          </Stack>
        </Box>
        <Box className="strock">
          <Strock />
        </Box>
      </div>
    </>
  );
}

export default App;
