import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TransactionsForm from "../components/ResultCheckerTransaction";
import waec from "../assets/waec.png";
import neco from "../assets/neco.png";
import nabteb from "../assets/nabteb.png";
import colors from "../config/colors";

const resultChecker = [
  { i_d: "1", type: "WAEC CHECKER", price: "700" },
  { i_d: "2", type: "WAEC VERIFICATION", price: "700" },
  { i_d: "3", type: "NECO TOKEN", price: "700" },
  { i_d: "4", type: "NECO CHECKER", price: "700" },
  { i_d: "5", type: "NABTEB CHECKER", price: "700" },
];

const getImage = (type) => {
  if (type.split(" ")[0] === "WAEC") {
    return waec;
  } else if (type.split(" ")[0] === "NECO") {
    return neco;
  } else if (type.split(" ")[0] === "NABTEB") {
    return nabteb;
  }
};
const Separator = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 2,
        backgroundColor: colors.lightGray,
      }}
    />
  );
};
const ResultChecker = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TransactionsForm
        providers={resultChecker}
        placeholder="Beneficiary Phone Number"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ResultChecker;
