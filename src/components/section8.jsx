import { Box, Typography } from "@mui/material";
import React from "react";

const Section8 = () => {
  return (
    <>
      <Box
        marginLeft={{ sx: "0rem", sm: "4rem" }}
        marginTop={{ lg: "3rem", sm: "2rem", xs: "1rem" }}
        className="maindiv"
      >
        <Typography
          fontSize={{ lg: "3rem", sm: "2rem", xs: "1.2rem" }}
          sx={{ fontSize: "2rem", color: "white" }}
        >
          Productivity
        </Typography>

        <div>
          <Box maxWidth={900}>
            <Typography
              // className="maintext"
              variant="h2"
              sx={{
                fontSize: { lg: "3rem", sm: "2rem", xs: "1.2rem" },
                color: "#FFA28B",
                fontWeight: "400",
              }}
            >
              Supercharge collaboration.
              <span style={{ color: "white" }}>
                {" "}
                We provide unlimited repositories, best-in-class version
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
