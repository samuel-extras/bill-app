import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Form, FormField } from "./Forms";
import SafeArea from "./SafeArea";
import FormPicker from "./Forms/FormPicker";

const validationSchema = Yup.object().shape({
  customerID: Yup.string().required().min(1).label("Customer's ID"),
  amount: Yup.number().required().min(100).max(1000000).label("Amount"),
  provider: Yup.object().required().nullable().label("Provider"),
});

function TransactionsForm({ providers }) {
  return (
    <SafeArea style={styles.container}>
      <Form
        initialValues={{
          customerID: "",
          amount: "",
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
        <FormPicker
          items={[
            { i_d: "1", type: "Email" },
            { i_d: "2", type: "Phone Number" },
          ]}
          name="medium"
          placeholder="Choose a receiving medium"
        />
        <FormField
          keyboardType="numeric"
          maxLength={3}
          name="quantity"
          placeholder="1"
        />
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
