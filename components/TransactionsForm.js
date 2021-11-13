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

function TransactionsForm({ providers, placeholder = "Customer ID" }) {
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
          maxLength={255}
          name="customerID"
          placeholder={placeholder}
        />
        <FormField
          keyboardType="numeric"
          maxLength={9}
          name="amount"
          placeholder="₦0.00"
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
