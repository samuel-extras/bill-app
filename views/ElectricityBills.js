import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TransactionsForm from "../components/TransactionsForm";

const provider = [
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    type: "Benin Electricity Distribution Company",
    value: 1,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    type: "Eko Electricity Distribution Company",
    value: 2,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    type: "Enugu Electricity Distribution Company",
    value: 3,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    type: "Ibadan Electricity Distribution Company",
    value: 4,
  },
];

const ElectricityBills = (props) => {
  return (
    <TransactionsForm
      providers={provider}
      labels={["Distributor", "Customer ID"]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ElectricityBills;
