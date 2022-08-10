import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantScreen from "./src/components/features/restaurants/screen/RestaurantScreen";

export default function App() {
  return (
    <>
      {/* ExpoStatusBar only ios adjustment */}
      <ExpoStatusBar />
      <RestaurantScreen />
    </>
  );
}
