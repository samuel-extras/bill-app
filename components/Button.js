import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const Button = ({
  borderRadius = 25,
  title,
  onPress,
  color = "primary",
  bordered,
  textColor = colors.white,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.button,
        {
          backgroundColor: colors[color],
          borderColor: colors.white,
          borderWidth: bordered ? 1 : 0,
          borderRadius: borderRadius,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    elevation: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default Button;
