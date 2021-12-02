import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TransactionsForm from "../components/TransactionsForm";

const provider = [
  {
    backgroundColor: "#45aaf2",
    image: require("../assets/airtel.png"),
    type: "Airtel",
    value: 1,
  },
  {
    backgroundColor: "#4b7bec",
    image: require("../assets/Glo_button.png"),
    type: "GLO Data Bundle",
    value: 2,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/mtn.png"),
    type: "MTN",
    value: 3,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/smile.png"),
    type: "Smile Bundle",
    value: 4,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/spectranet.jpg"),
    type: "Spectranet Limited",
    value: 5,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/visafone.png"),
    type: "VISAFONE",
    value: 6,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/9mobile.png"),
    type: "9Mobile",
    value: 7,
  },
  {
    backgroundColor: "#778ca3",
    image: require("../assets/ipnx.png"),
    type: "ipNX Subscription",
    value: 8,
  },
];

const InternetData = (props) => {
  return (
    <TransactionsForm
      providers={provider}
      labels={["Network", "Phone Number"]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default InternetData;
