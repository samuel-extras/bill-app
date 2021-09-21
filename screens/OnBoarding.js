import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Swiper from "../views/Swiper";

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <Swiper navigation={navigation}>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: "#fff" }]}>
        <Image
          source={require("../assets/undraw1.png")}
          style={styles.image}
          {...iconStyles}
        />
        <Text style={styles.header}>Wallet</Text>
        <Text style={styles.text}>
          ReactJS is a trustworthy javascript library that enhances the speed of
          JavaScript.
        </Text>
      </View>

      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: "#fff" }]}>
        <Image
          source={require("../assets/undraw2.png")}
          style={styles.image}
          {...iconStyles}
        />
        <Text style={styles.header}>Bill Payment</Text>
        <Text style={styles.text}>
          ReactJS is a trustworthy javascript library that enhances the speed of
          JavaScript and
        </Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: "#fff" }]}>
        <Image
          source={require("../assets/undraw3.png")}
          style={styles.image}
          {...iconStyles}
        />
        <Text style={styles.header}>Easy Recharge</Text>
        <Text style={styles.text}>
          The Retail Banking Biometrics Confidence Report concludes that
          customers not only believe
        </Text>
      </View>
    </Swiper>
  );
};

const iconStyles = {
  size: 100,
  color: "#000",
};

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    top: -30,
  },
  // Header styles
  header: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
    textTransform: "uppercase",
  },
  image: {
    width: "80%",
    height: "40%",
    resizeMode: "contain",
  },

  // Text below header
  text: {
    color: colors.black,
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center",
  },
});
export default OnBoarding;
