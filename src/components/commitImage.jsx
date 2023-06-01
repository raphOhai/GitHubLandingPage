import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
import "./styles/terminal.css";

const CommitImage = () => {
  return (
    <Box>
      <Box mt={5} ml={12} mr={12} sx={{ position: "relative" }}>
        <img className="responsive" src="src/assets/commitDemo.png" />
        <Box sx={{ position: "absolute", top: 500, right: 10 }}>
          <img src="src/assets/newRender.svg" />
        </Box>
      </Box>
      <Box  mt={5} pl={10} ml={12} mr={12} maxWidth={500}>
        <Stack spacing={3}>
          <Typography
            sx={{ fontSize: "1.3rem", fontWeight: 400, color: "white" }}
          >
            GitHub Codespaces{" "}
            <span style={{ color: "#8B949E" }}>
              offers a complete dev environment in seconds, so you can code,
              build, test, and open pull requests from any repo anywhere.
            </span>
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Check out GitHub Codespaces
            </Typography>
            <img src="src/assets/Frame.svg" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CommitImage;
