import React from "react";
const Flex = ({
  flexDirection = "row",
  flexWrap = "wrap",
  alignItems = "center",
  justifyContent = "center",
  children
}) => (
  <div
    style={{
      display: "flex",
      flexDirection,
      alignItems,
      justifyContent,
      flexWrap
    }}
  >
    {children}
  </div>
);
export default Flex;
