import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import colors from "../config/colors";

const success = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.thanks}>Thanks!</Text>
      </View>
      <View style={styles.lower}>
        <MaterialCommunityIcons
          name="checkbox-marked-circle"
          size={60}
          color={colors.primary}
        />
        <Text style={styles.success}>
          Your transansaction is completed successfully
        </Text>
        <Text style={styles.text}>
          Perform more transansaction with ease using this app, Thank you
        </Text>

        <Button
          title="Back To Home"
          color="blue"
          textColor={colors.primary}
          style={styles.button}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "70%",
    elevation: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  lower: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  success: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    color: colors.mediumGray,
    textAlign: "center",
    padding: 10,
  },
  thanks: {
    color: colors.white,
    fontSize: 35,
    fontWeight: "bold",
  },
  upper: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default success;
