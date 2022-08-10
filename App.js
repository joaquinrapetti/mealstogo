import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = useState(null);

  console.log(searchQuery);

  return (
    <>
      {/* ExpoStatusBar only ios adjustment */}
      <ExpoStatusBar />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

console.log(StatusBar.currentHeight);
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 50 : null, -- Manual distance from status bar
    // StatusBar.currentHeight -- only android currentHeight from status bar
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1, // flex: 1 - Extends all as auto is dynamic ; '100%' is overflow
    padding: 16,
    backgroundColor: "red",
    height: "auto",
  },
});
