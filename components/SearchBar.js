import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextInput from "./TextInput";
import colors from "../config/colors";

const SearchBar = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" icon="magnify" width="80%" />
      <MaterialCommunityIcons
        name="calendar"
        size={30}
        color={colors.primary}
        onPress={onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default SearchBar;
