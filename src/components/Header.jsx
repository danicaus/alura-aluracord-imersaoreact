import React from 'react';

import Title from "./Title";
import { Box, Button } from "@skynexui/components";

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title variant="heading5">Chat</Title>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
          onClick={() => localStorage.removeItem('user')}
        />
      </Box>
    </>
  );
}

export default Header;
