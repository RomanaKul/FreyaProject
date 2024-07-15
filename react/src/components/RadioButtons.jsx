import { useState } from "react";
import Radio from "@mui/material/Radio";
import { Stack, styled } from "@mui/material";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const StyledRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.secondary.main,
    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  }));

  return (
    <Stack direction="row" justifyContent="center" padding={3}>
      <StyledRadio {...controlProps("a")} />
      <StyledRadio {...controlProps("b")} />
      <StyledRadio {...controlProps("c")} />
    </Stack>
  );
}
