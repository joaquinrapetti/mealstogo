import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import RestaurantScreen from "./src/components/features/restaurants/screen/RestaurantScreen";

export default function App() {
  let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  let [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

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
