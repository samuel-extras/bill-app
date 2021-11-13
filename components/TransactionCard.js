import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const TransactionCard = ({ amount, icon, title, subTitle, image, type, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.logo, { backgroundColor: colors.lighterPrimary }]}>
          <View
            style={[
              styles.logoInner,
              { backgroundColor: colors.lightestPrimary },
            ]}
          >
            {icon ? (
              <FontAwesome5 name={icon} color={colors.white} size={22} />
            ) : (
              <Image source={image} style={styles.image} borderRadius={14} />
            )}
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </Text>
        </View>
        <Text
          style={[
            styles.amount,
            { color: type === "credit" ? colors.success : colors.black },
          ]}
          numberOfLines={1}
        >
          ₦{amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },

  container: {
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
  },
  detailsContainer: {
    marginLeft: 20,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 28,
    height: 28,
  },

  logo: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  logoInner: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },

  subTitle: {
    color: colors.mediumGray,
    fontSize: 14,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: "2%",
    fontSize: 18,
    color: colors.black,
  },
});

export default TransactionCard;
