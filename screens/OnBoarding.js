import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../config/colors";
import Swiper from "../views/Swiper";

const OnBoarding = () => {
  return (
    <Swiper>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: "#fff" }]}>
        <Icon name="ios-nutrition" {...iconStyles} />
        <Text style={styles.header}>EAT</Text>
        <Text style={styles.text}>
          Good nutrition is an important part of leading a healthy lifestyle
        </Text>
      </View>

      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: "#fff" }]}>
        <Icon name="ios-cloud-upload" {...iconStyles} />
        <Text style={styles.header}>PRAY</Text>
        <Text style={styles.text}>
          Prayer is one of the most important things a Christian can do
        </Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: "#fff" }]}>
        <Image
          source={require("../assets/bg-img-9.png")}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          {...iconStyles}
        />
        <Text style={styles.header}>LOVE</Text>
        <Text style={styles.text}>Where there is love there is life</Text>
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
  },
  // Header styles
  header: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: colors.primary,
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center",
  },
});
export default OnBoarding;
