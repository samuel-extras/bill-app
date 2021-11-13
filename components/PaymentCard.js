import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import Button from "./Button";

const PaymentCard = ({ gateway, image, button, buttonColor, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Image source={image} style={styles.image} />
        <Text style={styles.gateway}>{gateway}</Text>
      </View>
      <Button
        title={button}
        style={styles.button}
        color={buttonColor}
        onPress={onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 20,
  },
  card: {
    height: 180,
    width: 160,
    backgroundColor: colors.lightestPrimary,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  gateway: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 24,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default PaymentCard;
