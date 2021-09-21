import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({
  size = 40,
  backgroundColor = "#fff",
  name,
  iconColor = colors.primary,
  children,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.lighterGray,
        borderWidth: 2,
        paddingHorizontal: 4,
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.5}
        style={styles.icon}
      ></MaterialCommunityIcons>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 12,
    color: colors.secondary,
    height: "35%",
    marginTop: -4,
  },
  icon: {
    height: "65%",
  },
});

export default Icon;
