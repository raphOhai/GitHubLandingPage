import "./App.css";
import { Box } from "@mui/material";

import { Stack } from "@mui/system";
import Section1 from "./components/Section1";
import Section2 from "./components/section2";
import Section3 from "./components/Section3";
import Strock2 from "./assets/strock2";
import Section4 from "./components/section4";
import Terminal from "./components/terminal";
// import Strock from "./assets/strock";

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
            <>
              <Section1 />
            </>
            <Box>
              <Section2 />
            </Box>
            <Box>
              <Section3 />
            </Box>
          </Stack>
          <Box>
            <Section4 />
          </Box>
        </Box>
        {/* <Box className="strock">
          <Strock/>

        </Box> */}
        <Box p={2}>
          <Terminal />
        </Box>

        <div className="strock2 ">
          <Strock2 />
        </div>
        <img className="strock" src="../src/assets/strock.svg" />
      </div>
    </>
  );
}

export default App;
