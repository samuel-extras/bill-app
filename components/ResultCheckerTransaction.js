import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Form, FormField } from "./Forms";
import SafeArea from "./SafeArea";

import FormPicker from "./Forms/FormPicker";
import RadioButtonRN from "radio-buttons-react-native";
import Text from "./Text";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  reciever: Yup.string().required().min(1).label("Reciever"),
  quantity: Yup.number().required().min(1).max(100).label("Quantity"),
  provider: Yup.object().required().nullable().label("Provider"),
});
const data = [
  {
    label: "Email",
  },
  {
    label: "Phone number",
  },
];
function TransactionsForm({ providers }) {
  const [reciever, setReciever] = useState("");

  return (
    <SafeArea style={styles.container}>
      <Form
        initialValues={{
          reciever: "",
          quantity: "",
          provider: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <FormPicker
          items={providers}
          name="provider"
          placeholder="Choose a Provider"
        />
        <FormField
          keyboardType="numeric"
          maxLength={3}
          name="quantity"
          placeholder="Enter quantity"
        />
        <View>
          <Text style={{ fontSize: 18, color: colors.mediumGray }}>
            Send Card To:
          </Text>
          <RadioButtonRN
            data={data}
            selectedBtn={(e) => setReciever(e.label)}
            circleSize={10}
            activeColor={colors.primary}
            boxDeactiveBgColor={colors.lightestPrimary}
            boxActiveBgColor={colors.lightestPrimary}
            textColor={colors.mediumGray}
            boxStyle={{ borderWidth: 0 }}
            textStyle={{ fontSize: 18 }}
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
            boxStyle={{ width: "48%" }}
          />
          {reciever ? (
            <FormField
              keyboardType={reciever === "Phone number" ? "numeric" : "default"}
              name="reciever"
              placeholder={`Enter ${reciever}`}
            />
          ) : (
            <View />
          )}
        </View>
      </Form>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default TransactionsForm;
