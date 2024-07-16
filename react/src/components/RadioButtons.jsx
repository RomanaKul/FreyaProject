import Radio from "@mui/material/Radio";
import { Stack, styled } from "@mui/material";
import PropTypes from "prop-types";

export default function RadioButtons({ count, currentIndex, setCurrentIndex }) {
  const StyledRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.secondary.main,
    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  }));

  const handleChange = (event) => {
    setCurrentIndex(Number(event.target.value));
  };

  const controlProps = (item) => ({
    checked: currentIndex === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": `slide ${item + 1}` },
  });

  const radios = Array.from({ length: count }, (_, index) => (
    <StyledRadio key={index} {...controlProps(index)} />
  ));

  return (
    <Stack direction="row" justifyContent="center" padding={3}>
      {radios}
    </Stack>
  );
}

RadioButtons.propTypes = {
  count: PropTypes.number,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};
