import React from "react";

import { useFormikContext } from "formik";
import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import { StyleSheet, View } from "react-native";

function FormField({ name, ...otherProps }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <View style={styles.container}>
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
});

export default FormField;
