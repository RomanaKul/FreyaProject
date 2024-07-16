import { Stack } from "@mui/material";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

export default function Slider({ children, currentIndex, setCurrentIndex }) {
  const visibleChildren = children.slice(currentIndex, currentIndex + 3);
  let totalSlides;
  children.length <= 3
    ? (totalSlides = 0)
    : (totalSlides = children.length - 2);

  return (
    <>
      <Stack direction="row" spacing={5} justifyContent={"space-evenly"}>
        {visibleChildren}
      </Stack>
      <RadioButtons
        count={totalSlides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}

Slider.propTypes = {
  children: PropTypes.node,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};
