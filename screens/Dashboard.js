import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../components/Text";

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

const Dashboard = (props) => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.upper}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            ></View>
            <View style={{}}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell"
                  size={24}
                  color={colors.lightestPrimary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              top: "18%",
              flexDirection: "row",
              alignItems: "flex-start",
              paddingHorizontal: 28,
            }}
          >
            <Text
              style={{
                color: colors.lightestPrimary,
                position: "absolute",
                top: 10,
                left: 16,
                fontWeight: "bold",
              }}
            >
              ₦
            </Text>
            <Text
              style={{
                color: colors.lightestPrimary,
                fontSize: 50,
                fontWeight: "400",
              }}
            >
              75,000.38
            </Text>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.body}>
            <ListView items={items} />
          </View>
        </View>
        <BlurView intensity={60} style={styles.card}>
          <LinearGradient
            colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.3)"]}
            style={styles.cardInner}
          >
            <Text
              style={{
                color: colors.lightestPrimary,
                fontSize: 18,
              }}
            >
              {" "}
              ₦5,000
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                padding: 10,
                borderRadius: 2,
              }}
            >
              <LinearGradient
                colors={["rgba(3, 201, 169, 0.8)", "rgba(3, 201, 169, 0.8)"]}
                style={{
                  padding: 4,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    color: colors.lightestPrimary,
                  }}
                >
                  {" "}
                  Active{" "}
                </Text>
              </LinearGradient>
            </View>
          </LinearGradient>
        </BlurView>
      </View>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  body: {
    height: "90%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
  card: {
    height: 80,
    width: "94%",
    position: "absolute",
    borderRadius: 5,
    borderColor: `rgba(209, 213, 219, 0.8)`,
    borderWidth: 1,
    top: "28%",
    backgroundColor: colors.lightestPrimary,
    justifyContent: "center",
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
  upper: {
    backgroundColor: colors.primary,
    width: "100%",
    flex: 1,
    height: "50%",
    top: 0,
  },
  lower: {
    backgroundColor: colors.white,
    position: "absolute",
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;
