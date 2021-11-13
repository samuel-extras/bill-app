import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

const ListView = ({ items, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.value.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            label={item.label}
            onPress={() => navigation.navigate(item.label)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default ListView;
