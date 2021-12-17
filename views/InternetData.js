import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Form, FormField } from "../components/Forms";
import SafeArea from "../components/SafeArea";
import FormPicker from "../components/Forms/FormPicker";
import RecentTransactions from "../components/RecentTransactions";

const provider = [
  {
    backgroundColor: "#45aaf2",
    image: require("../assets/airtel.png"),
    type: "AIRTEL",
    value: 1,
  },
  {
    backgroundColor: "#4b7bec",
    image: require("../assets/Glo_button.png"),
    type: "GLO",
    value: 2,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/mtn.png"),
    type: "MTN",
    value: 3,
  },

  {
    backgroundColor: "#778ca3",
    image: require("../assets/9mobile.png"),
    type: "9 MOBILE",
    value: 7,
  },
];

const packages = [
  { i_d: "25", operator: "MTN", type: "SME", plan: "3GB" },
  { i_d: "2", operator: "MTN", type: "SME", plan: "500MB" },
  { i_d: "3", operator: "MTN", type: "SME", plan: "1GB" },
  { i_d: "4", operator: "MTN", type: "SME", plan: "2GB" },
  { i_d: "5", operator: "MTN", type: "SME", plan: "5GB" },
  { i_d: "7", operator: "GLO", type: "SME", plan: "Night_25 250MB" },
  { i_d: "8", operator: "GLO", type: "SME", plan: "Night_50 500MB" },
  { i_d: "9", operator: "GLO", type: "SME", plan: "Night_100 1GB" },
  { i_d: "10", operator: "GLO", type: "SME", plan: "1GB" },
  { i_d: "11", operator: "GLO", type: "SME", plan: "2.3GB" },
  { i_d: "12", operator: "GLO", type: "SME", plan: "3.75GB" },
  { i_d: "14", operator: "9MOBILE", type: "SME", plan: "500MB" },
  { i_d: "15", operator: "9MOBILE", type: "SME", plan: "1.5GB" },
  { i_d: "16", operator: "9MOBILE", type: "SME", plan: "2GB" },
  { i_d: "17", operator: "9MOBILE", type: "SME", plan: "3GB" },
  { i_d: "18", operator: "9MOBILE", type: "SME", plan: "4.5GB" },
  { i_d: "21", operator: "AIRTEL", type: "SME", plan: "1.5GB" },
  { i_d: "22", operator: "AIRTEL", type: "SME", plan: "4.5GB" },
  { i_d: "23", operator: "AIRTEL", type: "SME", plan: "6GB" },
  { i_d: "26", operator: "GLO", type: "SME", plan: "5.25GB" },
  { i_d: "27", operator: "GLO", type: "SME", plan: "Special 7GB" },
  { i_d: "28", operator: "GLO", type: "SME", plan: "7GB" },
  { i_d: "29", operator: "GLO", type: "SME", plan: "9GB" },
  { i_d: "30", operator: "GLO", type: "SME", plan: "12GB" },
  { i_d: "31", operator: "GLO", type: "SME", plan: "16.5GB" },
  { i_d: "32", operator: "GLO", type: "SME", plan: "25GB" },
  { i_d: "33", operator: "GLO", type: "SME", plan: "42GB" },
  { i_d: "34", operator: "GLO", type: "SME", plan: "78GB" },
  { i_d: "35", operator: "GLO", type: "SME", plan: "100GB" },
  { i_d: "36", operator: "GLO", type: "SME", plan: "115GB" },
  { i_d: "37", operator: "9 MOBILE", type: "SME", plan: "11GB" },
  { i_d: "38", operator: "9 MOBILE", type: "SME", plan: "15GB" },
  { i_d: "39", operator: "9 MOBILE", type: "SME", plan: "40GB" },
];

const validationSchema = Yup.object().shape({
  customerID: Yup.string().required().min(1).label("Customer's ID"),
  beneficiary: Yup.number().required().min(10).max(11).label("Beneficiary"),
  provider: Yup.object().required().nullable().label("Provider"),
});

const InternetData = (props) => {
  const [network, setNetwork] = useState("");
  const [dataType, setDataType] = useState("");
  return (
    <View style={styles.container}>
      <Form
        initialValues={{
          customerID: "",
          amount: "",
          provider: null,
        }}
        validationSchema={validationSchema}
      >
        <FormPicker
          items={[
            { type: "SME Data", value: 1 },
            { type: "Normal Data", value: 2 },
          ]}
          name="type"
          placeholder="Select Data Type"
          label="Data Type"
          onChange={(e) => setDataType(e.type)}
        />

        <FormPicker
          items={provider}
          name="provider"
          placeholder="Choose a Provider"
          label="Network"
          onChange={(e) => setNetwork(e.type)}
        />
        <FormPicker
          items={
            dataType === "SME Data"
              ? packages
                  .filter((e) => e.operator.includes(network))
                  .map((selectedItem) => ({
                    type: ` ${selectedItem.operator}  ${selectedItem.type} ${selectedItem.plan}  `,
                    i_d: selectedItem.i_d,
                  }))
              : []
          }
          name="products"
          placeholder="Select a package"
          label="Products"
        />

        <FormField
          maxLength={11}
          minLength={11}
          name="beneficiary"
          placeholder="Beneiciary"
          label="Beneficiary"
          keyboardType="numeric"
        />
      </Form>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
  },
});

export default InternetData;
