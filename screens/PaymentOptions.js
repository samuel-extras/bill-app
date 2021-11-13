import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListingCard from "../components/ListingCard";
import colors from "../config/colors";

const payment = [
  {
    title: "Fund Wallet With Bank Transfer",
    value: 1,
    icon: "bank-transfer",
    route: "Fund wallet With Bank Transfer",
  },
  {
    title: "Fund Wallet With Card",
    value: 2,
    icon: "wallet",
    route: "Fund Wallet With Card",
  },
];

const PaymentOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={payment}
        keyExtractor={(item) => item.value.toString()}
        renderItem={({ item }) => (
          <ListingCard
            label={item.title}
            iconName={item.icon}
            key={item.value}
            onPress={() => navigation.navigate(item.route)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.trasparent,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 2,
  },
});

export default PaymentOptions;
