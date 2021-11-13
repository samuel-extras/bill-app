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
    label: "GLO Data Bundle",
    value: 2,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/mtn.png"),
    label: "MTN",
    value: 3,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/smile.png"),
    label: "Smile Bundle",
    value: 4,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/spectranet.jpg"),
    label: "Spectranet Limited",
    value: 5,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/visafone.png"),
    label: "VISAFONE",
    value: 6,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/9mobile.png"),
    label: "9Mobile",
    value: 7,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/ipnx.png"),
    label: "ipNX Subscription",
    value: 8,
  },
];

const InternetData = (props) => {
  return <TransactionsForm providers={provider} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default InternetData;
