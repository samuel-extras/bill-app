import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={2}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/bg-img-9.png")} />
        <Text style={styles.tagLine}>Best Bill App You Can See</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          color="transparent"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.black,
    // textShadowColor: colors.black,
    // textShadowOffset: { width: -3, height: 3 },
    // textShadowRadius: 10,
  },
});

export default Welcome;
