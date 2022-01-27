import React from "react";
import { Text } from "@skynexui/components";

import localData from "../config.json";

function UsernameData({ children }) {
  return (
    <Text
      variant="body3"
      styleSheet={{
        color: localData.theme.colors.neutrals[300],
        marginTop: "4px",
      }}
    >
      {children}
    </Text>
  );
}

export default UsernameData;
