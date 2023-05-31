import { Box, Stack, Typography } from "@mui/material";
// p
import { Margin0Auto, MyText, codeBox, section7Box } from ".";
import PythonSvg from "../assets/python";
import JsSvg from "../assets/JsSvg";
import GoSvg from "../assets/GoSvg";

const Copilotdemo = () => {
  return (
    <Box sx={section7Box}>
      <Stack>
        <Box p={2} sx={{ display: "flex", gap: "1rem" }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Margin0Auto>
              <PythonSvg />
            </Margin0Auto>

            <MyText>draw_scatterplot.py</MyText>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Margin0Auto>
              <JsSvg />
            </Margin0Auto>

            <MyText>time.js</MyText>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Margin0Auto>
              <GoSvg />
            </Margin0Auto>
            <MyText>memeize.go</MyText>
          </Box>
        </Box>
        <Box p={4} sx={codeBox}></Box>
      </Stack>
    </Box>
  );
};

export default Copilotdemo;
