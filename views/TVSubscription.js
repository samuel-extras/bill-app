import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TransactionsForm from "../components/TransactionsForm";

const provider = [
  {
    backgroundColor: "#45aaf2",
    image: require("../assets/DSTV.png"),
    label: "DSTV Box Office Wallet Topup",
    value: 1,
  },
  {
    backgroundColor: "#4b7bec",
    image: require("../assets/DSTV.png"),
    label: "DSTV Subscription",
    value: 2,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/gotv.png"),
    label: "Gotv",
    value: 3,
  },
  {
    backgroundColor: "#a55eea",
    image: require("../assets/startime.png"),
    label: "Startimes TV Subscription",
    value: 4,
  },
];

const TVSubscription = (props) => {
  return <TransactionsForm providers={provider} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default TVSubscription;
