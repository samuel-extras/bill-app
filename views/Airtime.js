import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TransactionsForm from "../components/TransactionsForm";
import mtn from "../assets/mtn.png";

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
    type: "9MOBILE",
    value: 5,
  },
];

const recents = [
  {
    value: 1,
    label: "09033728282",
    image: mtn,
  },
  {
    value: 2,
    label: "09033728282",
    image: mtn,
  },
  {
    value: 3,
    label: "09033728282",
    image: mtn,
  },
  {
    value: 4,
    label: "09033728282",
    image: mtn,
  },
  {
    value: 5,
    label: "09033728282",
    image: mtn,
  },
];

const Airtime = (props) => {
  return (
    <React.Fragment>
      <TransactionsForm
        providers={provider}
        placeholder="Beneficiary Phone Number"
        labels={["Network", "Phone Number"]}
        recents={recents}
      />
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Airtime;
