import React, { useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import RestaurantInfoCard from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* marginTop: Platform.OS === "android" ? 50 : null, -- Manual distance from status bar */
  /* StatusBar.currentHeight -- only android currentHeight from status bar */
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  /* flex: 1 - Extends all as auto is dynamic ; '100%' is overflow */
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: blue;
`;

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
