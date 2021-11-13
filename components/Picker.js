import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/styles";
import Text from "./Text";
import PickerItem from "./PickerItem";
import colors from "../config/colors";


function Picker({
  icon,
  onSelectItem,
  numColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  items,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            style={styles.icon}
            color={defaultStyle.colors.medium}
          />
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.type} </Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder} </Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyle.colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.i_d}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.type}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.lightestPrimary,
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: "black",
  },
  placeholder: {
    flex: 1,
    color: colors.mediumGray,
  },
});

export default Picker;
