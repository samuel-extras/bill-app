import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ListingCard = ({ iconName, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={iconName}
        size={40}
        color={colors.primary}
      />
      <Text style={styles.label}>{label}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={20}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: colors.primary,
    borderRadius: 5,
    backgroundColor: colors.lightestPrimary,
    marginVertical: 8,
    elevation: 1,
  },
  label: { color: colors.primary, flex: 1, fontSize: 18, marginLeft: 10 },
});

export default ListingCard;
