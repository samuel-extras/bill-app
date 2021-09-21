import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
      
      </View>
      <View style={styles.lower}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    
  },
  upper: {
    backgroundColor: colors.primary,
    height: "30%",
    width: "100%",
  },
  lower: {
    backgroundColor: colors.white,
    height: "70%",
    width: "100%",
  },
});

export default Home;
