import "./App.css";
import { Box } from "@mui/material";

import { Stack } from "@mui/system";
import Section1 from "./components/Section1";
import Section2 from "./components/section2";
import Section3 from "./components/Section3";
import Strock2 from "./assets/strock2";
import Section4 from "./components/section4";

import GreenStrock from "./assets/greenStrock";
import Section5 from "./components/section5";
import CodeSpaceDemo from "./components/codespace";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import FirstStrock from "./assets/firstStrock";
import SvgStrocks from "./components/svgStrocks";
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

            <Section2 />

            <Section3 />
          </Stack>
          <Box mt={-8}>
            <Section4 />
          </Box>
        </Box>
        {/* <Box className="strock">
          <Strock/>

        </Box> */}
        <Box p={2}>
          <CodeSpaceDemo />
        </Box>
        <Box
          sx={{
            paddingLeft: { lg: "15rem", sm: "3rem", xs: "1rem" },
            paddingRight: { lg: "15rem", sm: "3rem", xs: "1rem" },
          }}
        >
          <Section5 />
        </Box>

        <div className="section6Pic"></div>
        <Box
          sx={{
            paddingLeft: { lg: "15rem", sm: "3rem", xs: "1rem" },
            paddingRight: { lg: "15rem", sm: "3rem", xs: "1rem" },
          }}
        >
          <Section6 />
        </Box>

        <Section7 />

        <SvgStrocks />
        {/* <img className="strock" src="../src/assets/strock.svg" /> */}
      </div>
    </>
  );
}

export default App;
