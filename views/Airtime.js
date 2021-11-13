import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TransactionsForm from "../components/TransactionsForm";

const provider = [
  {
    backgroundColor: "#45aaf2",
    image: require("../assets/airtel.png"),
    label: "Airtel",
    value: 1,
  },
  {
    backgroundColor: "#4b7bec",
    image: require("../assets/Glo_button.png"),
    label: "GLO",
    value: 2,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/mtn.png"),
    label: "MTN",
    value: 3,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/visafone.png"),
    label: "VISAFONE",
    value: 4,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/9mobile.png"),
    label: "9MOBILE",
    value: 5,
  },
];

const Airtime = (props) => {
  return (
    <TransactionsForm
      providers={provider}
      placeholder="Beneficiary Phone Number"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Airtime;
