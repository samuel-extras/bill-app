import React from "react";
import { useFormikContext } from "formik";
import CustomButton from "../Button";
import { StyleSheet } from "react-native";
import device from "../../config/device";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <CustomButton style={styles.button} title={title} onPress={handleSubmit} />
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: device.windowHeight * 0.04,
  },
});
export default SubmitButton;
