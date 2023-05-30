// import React from "react";
import "../components/styles/section4.css";
import { Typography } from "@mui/material";

const Section4 = () => {
  return (
    <>
      <div className="maindiv">
        <Typography sx={{ fontSize: "2rem", color: "white" }}>
          Productivity
        </Typography>

        <div>
          <Typography
            // className="maintext"
            variant="h2"
            sx={{ fontSize: "3.4rem", color: "#7EE787", fontWeight: "400" }}
          >
            Accelerate high-quality software development.{" "}
            <span style={{ color: "white" }}>
              Our platform drives innovation with tools that boost developer
              velocity.
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Section4;
