import { Box, Typography } from "@mui/material";
import React from "react";

const Section8 = () => {
  return (
    <>
      <Box mt={16} className="maindiv">
        <Typography sx={{ fontSize: "2rem", color: "white" }}>
          Productivity
        </Typography>

        <div>
          <Box maxWidth={900}>
            <Typography
              // className="maintext"
              variant="h2"
              sx={{   fontSize: { lg: "3rem", sm: "2rem", xs: "2rem" }, color: "#FFA28B", fontWeight: "400" }}
            >
              Supercharge collaboration.
              <span style={{ color: "white" }}> We provide unlimited repositories, best-in-class version
                control, and the world’s most powerful open source community—so
                your team can work more efficiently together.
              </span>
            </Typography>
          </Box>
        </div>
      </Box>

    
    </>
  );
};

export default Section8;
