import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Box } from '@skynexui/components';

import errorAnimation from '../src/animations/error.json'

export default function ErrorPage() {
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh',
        padding: '3vh',
        margin: 'auto'
    }}
    >
      <Lottie
        width="100%"
        height="100%"
        config={{ animationData: errorAnimation }}
      />
    </Box>
  )
}