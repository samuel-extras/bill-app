import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Button = ({
  borderRadius = 5,
  icon,
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
          borderColor: colors.lighterGray,
          borderWidth: bordered ? 1 : 0,
          borderRadius: borderRadius,
        },
        style,
      ]}
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons name={icon} color={colors.primary} size={20} />
      )}
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
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 10,
  },
});

export default Button;
