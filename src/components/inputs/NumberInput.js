import React from "react";
import BaseInput from "./BaseInput";
const NumberInput = ({
  value,
  onChange,
  min = 1,
  max = 10,
  id,
  step = 1,
  ...rest
}) => (
  <BaseInput
    value={value}
    onChange={onChange}
    min={min}
    max={max}
    step={step}
    type="number"
    id={id}
    {...rest}
  />
);
export default NumberInput;
