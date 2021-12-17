import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import biometric from "../components/biometric";

import colors from "../config/colors";

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.to}>To</Text>
        <Text style={styles.beneficiary}>09033728258</Text>
        <Text style={styles.to}>Amount</Text>
        <Text style={styles.amount}>₦100</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardElement}>
          <Text style={styles.elementText}>From</Text>
          <Text style={styles.sender}>287893t73y7</Text>
        </View>
        <View style={styles.cardElement}>
          <Text style={styles.elementText}>Transaction Fee:</Text>
          <Text style={styles.elementText}>0.00</Text>
        </View>
        <View style={styles.cardElement}>
          <Text style={styles.elementText}>Product</Text>
          <Text style={styles.elementText}>Mtn SME</Text>
        </View>
      </View>
      <View style={styles.biometric}>
        <TouchableOpacity
          style={{ height: 50, width: 50, bottom: "20%" }}
          onPress={() => biometric(() => navigation.navigate("success"))}
        >
          <MaterialCommunityIcons
            name="fingerprint"
            color={colors.primary}
            size={50}
          />
        </TouchableOpacity>
        <Text style={styles.tap}>Tap to Confirm</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  to: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.black,
  },
  beneficiary: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.black,
  },
  card: {
    height: "30%",
    width: "100%",
    padding: 20,
    borderRadius: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginBottom: 40,
  },
  cardElement: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  elementText: {
    fontSize: 16,
    fontWeight: "600",
  },
  sender: {
    fontWeight: "bold",
  },
  biometric: {
    alignItems: "center",
  },
  tap: {
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Confirmation;
