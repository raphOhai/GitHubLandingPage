// import React from "react";
import Strock2 from "../assets/strock2";

import FirstStrock from "../assets/firstStrock";
import { Box, Typography } from "@mui/material";
import StrockIcon1 from "../assets/strockIcon1";

import StrockIcon2 from "../assets/strockIcon2";
import Strock3 from "../assets/strock3";
import GreenStrock from "../assets/greenStrock";

const SvgStrocks = () => {
  return (
    <>
      <Box className="strock">
        <FirstStrock />
      </Box>
      <Box className="GlowBox1 strockIcon2 ">
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -9, left: -9 }}>
            <Typography>
              <StrockIcon1 />
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="strock2 ">
        <Strock2 />
      </div>
      <Box className="GlowBox2 strockIcon3 ">
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -9, left: -9 }}>
            <Typography>
              <StrockIcon2 />
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="strock3 ">
        <Strock3 />
      </div>

      <div className="strock4">
        <GreenStrock />
      </div>
    </>
  );
};

export default SvgStrocks;
