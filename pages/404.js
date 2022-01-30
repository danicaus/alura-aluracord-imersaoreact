import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Box, Text } from '@skynexui/components';

import localData from "../config.json";
import errorAnimation from '../src/animations/error.json'

export default function ErrorPage() {
  return (
    <Box
      styleSheet={{
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        height: '100vh',
        padding: '3vh',
        margin: 'auto',
        backgroundColor: localData.theme.colors.neutrals[700],
    }}
    >
      <Lottie
        width="100%"
        height="80%"
        config={{ animationData: errorAnimation, loop: true }}
      />
      <Text
      variant="display1"
      tag="h2"
        styleSheet={{
          color: localData.theme.colors.primary[400],
        }}
      >
        hum... não há nada aqui...
      </Text>
    </Box>
  )
}