

import React from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

import HomePage from '@pages/home';

export default function Home() {
  return (
    <>
    <MantineProvider>
      <HomePage/>
      </MantineProvider>
    </>
  );
}
