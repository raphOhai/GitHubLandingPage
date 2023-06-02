import "./App.css";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Section1 from "./components/Section1";
import Section2 from "./components/section2";
import Section3 from "./components/Section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import CodeSpaceDemo from "./components/codespace";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import SvgStrocks from "./components/svgStrocks";
import Section8 from "./components/section8";
import CommitImage from "./components/commitImage";
import Section9 from "./components/section9";
import Section9Cards from "./components/section9Cards";
import {
  MainPadding,
  MarginForDemoContents,
  defaultPadding,
} from "./components";
// import Strock from "./assets/strock";

// import starship form "../src/assets/starShips.svg"

function App() {
  return (
    <>
      <div className="hero">
        <Box className="spaceShip">
          <img
            className=" responsive"
            src="../src/assets/starsShips.svg"
          />
        </Box>

        <Box pt={50} sx={MainPadding}>
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

        <Box sx={defaultPadding}>
          <CodeSpaceDemo />
        </Box>
        <Box sx={MainPadding}>
          <Section5 />
        </Box>
        <div className="section6Pic"></div>
        <Box sx={MainPadding}>
          <Section6 />
        </Box>
        <Box sx={defaultPadding}>
          <Section7 />
        </Box>
        <Box sx={MainPadding}>
          <Section8 />
        </Box>
        <Box sx={defaultPadding}>
          <CommitImage />
        </Box>
        <Box sx={MainPadding}>
          <Section9 />
        </Box>
        <Box sx={defaultPadding}>
          <Section9Cards />
        </Box>
        {/* <SvgStrocks /> */}
      </div>
    </>
  );
}

export default App;
