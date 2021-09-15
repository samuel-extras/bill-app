import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "../Text";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <CustomText style={styles.error}>{error}</CustomText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 14,
  },
});
export default ErrorMessage;
