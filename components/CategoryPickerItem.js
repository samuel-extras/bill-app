import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onpress }) {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <CustomText style={styles.label}>{item.label}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
