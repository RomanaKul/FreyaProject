import { Stack } from "@mui/material";
import RadioButtons from "./RadioButtons";

function Slider({ children }) {
  return (
    <>
      <Stack direction="row" spacing={5} justifyContent={"space-evenly"}>
        {children}
      </Stack>
      <RadioButtons />
    </>
  );
}

export default Slider;
