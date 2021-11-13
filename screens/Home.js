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
            <Image
              source={require("../assets/bg-img-9.png")}
              style={styles.logo}
            />
            <Text style={styles.welcome}>Welcome</Text>
            <View style={{}}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell"
                  size={20}
                  color={colors.lightestPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.body}>
            <ListView items={items} navigation={navigation} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.activeBtn}>
            <LinearGradient
              colors={["rgba(3, 201, 169, 0.2)", "rgba(3, 201, 169, 0.2)"]}
              style={{
                padding: 2,
                borderRadius: 6,
              }}
            >
              <Text style={styles.active}> Active </Text>
            </LinearGradient>
          </View>
          <View style={styles.balance}>
            <Text style={styles.currency}>₦</Text>
            <Text style={styles.amount}>75,000.38</Text>
          </View>
          <View style={styles.fundBtn}>
            <CustomButton
              title="Fund Wallet"
              color="blue"
              textColor={colors.primary}
              bordered
              style={{ height: "50%", width: "42%", elevation: 0 }}
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
    padding: 20,
  },
  active: {
    color: "rgba(3, 201, 169, 1)",
    fontSize: 16,
  },
  activeBtn: {
    padding: 10,
    borderRadius: 2,
    height: "20%",
    width: "auto",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  amount: {
    color: colors.secondary,
    fontSize: 50,
    fontWeight: "400",
    marginLeft: 12,
  },

  balance: {
    height: "50%",
  },

  body: {
    height: "80%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
  card: {
    height: "22%",
    width: "94%",
    paddingHorizontal: "6%",
    paddingVertical: "3%",
    position: "absolute",
    borderRadius: 5,
    borderColor: `rgba(209, 213, 219, 0.8)`,
    borderWidth: 1,
    top: "23%",
    backgroundColor: colors.lightestPrimary,
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
    height: "30%",
    justifyContent: "center",
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
    height: "65%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  upper: {
    backgroundColor: colors.primary,
    width: "100%",
    flex: 1,
    height: "50%",
    top: 0,
  },
  welcome: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    elevation: 1,
  },
});

export default Home;
