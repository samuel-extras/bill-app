import React from "react";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";
import Text from "./Text";

function PickerItem({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {item.image && (
        <View style={styles.image}>
          <Image
            source={item.image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      )}
      <Text style={styles.text}>{item.type}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    padding: 20,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 12,
    padding: 1,
    backgroundColor: colors.lightestPrimary,
    marginLeft: 10,
  },
});

export default PickerItem;
