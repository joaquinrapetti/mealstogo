import React, { useState } from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/RestaurantInfoCard";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  console.log(searchQuery);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

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

export default RestaurantScreen;
