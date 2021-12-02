import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../components/Text";
import CustomButton from "../components/Button";

import colors from "../config/colors";
import ListView from "../components/ListView";
import SafeArea from "../components/SafeArea";

const items = [
  {
    icon: "cellphone-basic",
    label: "Airtime",
    value: 1,
  },
  {
    icon: "laptop",
    label: "Internet Data",
    value: 2,
  },
  {
    icon: "television",
    label: "TV Subscriptions",
    value: 3,
  },
  {
    icon: "lightbulb-on",
    label: "Electricity",
    value: 4,
  },
  {
    icon: "book-open-variant",
    label: "Result Checkers",
    value: 5,
  },
  {
    icon: "cash-refund",
    label: "Airtime To Cash",
    value: 6,
  },
  {
    icon: "bank-transfer",
    label: "Transfer To Bank",
    value: 7,
  },
  {
    icon: "cast-connected",
    label: "Affiliate",
    value: 8,
  },
  {
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const Home = ({ navigation }) => {
  const [showPaystack, setShowPaystack] = useState(false);
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.upper}>
          <View style={styles.header}>
            <View>
              <Text style={styles.welcome}>Hi, Timothy</Text>
              <Text style={styles.headerText}>
                what do you want to do today?
              </Text>
            </View>
            <TouchableOpacity style={styles.imageContainer}>
              <MaterialCommunityIcons
                size={50}
                name="account"
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.balance}>
            <Text style={styles.balanceText}>Account Balance</Text>
            <Text style={styles.balanceAmount}>₦14,530</Text>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.body}>
            <ListView items={items} navigation={navigation} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.fundBtn}>
            <CustomButton
              title="Add Money"
              color="white"
              icon="plus-circle"
              textColor={colors.secondary}
              bordered
              style={{
                height: "65%",
                width: "50%",
                elevation: 0,
              }}
              onPress={() => navigation.navigate("Fund Wallet")}
            />
            <CustomButton
              title="Send Money"
              icon="send-circle"
              color="white"
              textColor={colors.secondary}
              bordered
              style={{ height: "65%", width: "50%", elevation: 0 }}
              onPress={() => navigation.navigate("Fund Wallet")}
            />
          </View>
        </View>
      </View>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: "15%",
  },
  balanceText: {
    color: "white",
    fontSize: 14,
  },

  balanceAmount: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },

  balance: {
    padding: 20,
    justifyContent: "center",
    height: "10%",
  },

  body: {
    height: "80%",
    width: "100%",
  },
  card: {
    height: "10%",
    width: "94%",
    position: "absolute",
    borderRadius: 5,
    borderColor: `rgba(209, 213, 219, 0.8)`,
    borderWidth: 1,
    top: "25%",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInner: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  currency: {
    color: colors.secondary,
    position: "absolute",
    top: 10,
    fontWeight: "bold",
  },

  fundBtn: {
    flexDirection: "row",
    width: "92%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  lower: {
    backgroundColor: colors.white,
    position: "absolute",
    height: "70%",
    width: "100%",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  upper: {
    backgroundColor: colors.primary,
    width: "100%",
    flex: 1,
    height: "40%",
    top: 0,
  },
  welcome: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    elevation: 1,
  },

  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  headerText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default Home;
