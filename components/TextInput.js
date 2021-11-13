import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/styles";

function CustomTextInput({
  icon,
  onOptionPress,
  option,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width: width }]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        style={styles.icon}
        color={defaultStyle.colors.mediumGray}
      />
      <TextInput
        style={[defaultStyle.text, styles.textInput]}
        {...otherProps}
        underlineColorAndroid="transparent"
      />
      {option && (
        <MaterialCommunityIcons
          style={styles.option}
          name={option}
          size={25}
          color={defaultStyle.colors.mediumGray}
          onPress={onOptionPress}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.lightestPrimary,
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  option: {
    position: "absolute",
    right: 20,
    height: "100%",
  },
  textInput: {
    width: "100%",
    height: "100%",
    color: defaultStyle.colors.black,
  },
});

export default CustomTextInput;
