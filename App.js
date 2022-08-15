import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import RestaurantScreen from "./src/components/features/restaurants/screen/RestaurantScreen";

export default function App() {
  return (
    <>
      {/* ExpoStatusBar only ios adjustment */}
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
