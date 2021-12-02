import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Text from "./Text";
import Recent from "./Recent";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const RecentTransactions = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.recent}>
        <FontAwesome5 name="clock" color={colors.success} size={16} />

        <Text style={styles.text}>Most Recent</Text>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.i_d || item.value.toString()}
        renderItem={({ item }) => <Recent item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  recent: {
    flexDirection: "row",
    paddingBottom: 20,
    marginLeft: 4,
  },
  text: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "bold",
  },
});

export default RecentTransactions;
