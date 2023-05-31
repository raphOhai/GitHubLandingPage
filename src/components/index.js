import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
// import exp from "constants";

export const MyPadding = {
  paddingLeft: { lg: "15rem", sm: "3rem", xs: "1rem" },
  paddingRight: { lg: "15rem", sm: "3rem", xs: "1rem" },
  // marginTop: { lg: "5rem", sm: "5rem", xs: "2rem" },
};

export const MyText = styled(Typography)({
  color: "#FFFFFF",
});

export const Center = styled(Box)({
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
});

export const Margin0Auto = styled(Box)({
  // textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  margin:"auto"
});

export const BlackBox = styled(Box)({
  border: "1px solid #424B5B",
  backgroundColor: "black",
  display: "flex",
  borderRadius: "50px",
  width: "24rem",
  gap: "1rem",
});
export const FlexBox = styled(Box)({
  display: "flex",
});

export const terminalBox = {
  backgroundColor: "#30363D",
  border: "1px solid #6E7681",
  padding:"3rem"
}

export const section7Box = {
  backgroundColor:"#161B22",
  border:"1px solid #30363D",
  borderRadius:"10px",
  overflow:"hidden"
}

export const grayText ={
  color:"#8B949E"
}

export const codeBox = {
  backgroundColor:"#0D1117"
}





