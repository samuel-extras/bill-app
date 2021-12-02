import React from "react";

import { useFormikContext } from "formik";
import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import Text from "../Text";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

function FormField({ name, label, label2, ...otherProps }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        {label && <Text style={styles.label}>{label}</Text>}
        {label2 && <Text style={styles.label2}>{label2}</Text>}
      </View>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labels: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  label: {
    fontSize: 14,
  },
  label2: {
    fontSize: 14,
    color: colors.mediumGray,
  },
});

export default FormField;
