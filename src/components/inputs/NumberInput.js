import React from "react";
import BaseInput from "./BaseInput";
const NumberInput = ({ value, onChange, min, max, id }) => (
  <BaseInput
    value={value}
    onChange={onChange}
    min={min}
    max={max}
    type="number"
    id={id}
  />
);
export default NumberInput;
