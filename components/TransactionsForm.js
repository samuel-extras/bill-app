import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Form, FormField } from "./Forms";
import SafeArea from "./SafeArea";
import FormPicker from "./Forms/FormPicker";
import RecentTransactions from "./RecentTransactions";

const validationSchema = Yup.object().shape({
  customerID: Yup.string().required().min(1).label("Customer's ID"),
  amount: Yup.number().required().min(100).max(1000000).label("Amount"),
  provider: Yup.object().required().nullable().label("Provider"),
});

function TransactionsForm({
  recents,
  labels,
  providers,
  placeholder = "Customer ID",
}) {
  return (
    <SafeArea style={styles.container}>
      {recents && <RecentTransactions data={recents} />}

      <Form
        initialValues={{
          customerID: "",
          amount: "",
          provider: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <FormField
          keyboardType="numeric"
          maxLength={9}
          name="amount"
          placeholder="₦0.00"
          label="Amount"
          label2="Account Balance: ₦28,096.36 "
        />
        <FormPicker
          items={providers}
          name="provider"
          placeholder="Choose a Provider"
          label={labels[0]}
        />

        <FormField
          maxLength={255}
          name="Beneficiary"
          placeholder={placeholder}
          label={labels[1]}
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
