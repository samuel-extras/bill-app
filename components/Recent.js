import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const Recent = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.logo, { backgroundColor: colors.lighterPrimary }]}>
        <View
          style={[
            styles.logoInner,
            { backgroundColor: colors.lightestPrimary },
          ]}
        >
          {item.icon ? (
            <FontAwesome5 name={item.icon} color={colors.white} size={22} />
          ) : (
            <Image source={item.image} style={styles.image} borderRadius={14} />
          )}
        </View>
      </View>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    minWidth: "20%",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  image: {
    width: 28,
    height: 28,
  },

  logo: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  logoInner: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Recent;
