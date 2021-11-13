import React, { useState } from "react";
  import { View, StyleSheet, Text, SectionList } from "react-native";
import SafeArea from "../components/SafeArea";
import SearchBar from "../components/SearchBar";
import TransactionCard from "../components/TransactionCard";
import colors from "../config/colors";
import mtn from "../assets/mtn.png";
import gtb from "../assets/gtb.png";
import DatePicker from "../components/DatePicker";

const DATA = [
  {
    id: 1,
    date: "01 Oct 2021",
    data: [
      {
        title: "MTN 2349033728282",
        time: "12:47 AM",
        amount: "400",
        type: "Borrow",
        provider: "mtn",
        inner: "#f7c600",
        outer: "#f6ecce",
        image: mtn,
      },
      {
        title: "",
        time: "12:47 AM",
        amount: "28,000",
        type: "intrest",
        inner: colors.primary,
        outer: colors.lighterPrimary,
        icon: "location-arrow",
      },
      {
        title: "Samuel Ajibola",
        time: "02:04 AM",
        amount: "4,000",
        type: "bank-transfer",
        bank: "GTB",
        inner: "#dd4f03",
        outer: "#eb9b2c",
        image: gtb,
      },
    ],
  },

  {
    id: 2,
    date: "02 Oct 2021",
    data: [
      {
        title: "MTN 2349033728282",
        time: "12:47 AM",
        amount: "400",
        type: "airtime",
        provider: "mtn",
        inner: "#f7c600",
        outer: "#f6ecce",
        image: mtn,
      },
      {
        title: "Travins Giores",
        time: "12:47 AM",
        amount: "28,000",
        type: "credit",
        inner: colors.primary,
        outer: colors.lighterPrimary,
        icon: "location-arrow",
      },
      {
        title: "Samuel Ajibola",
        time: "02:04 AM",
        amount: "9,000",
        type: "bank-transfer",
        bank: "GTB",
        inner: "#dd4f03",
        outer: "#eb9b2c",
        image: gtb,
      },
    ],
  },

  {
    id: 3,
    date: "18 Dec 2021",
    data: [
      {
        title: "MTN 2349033728282",
        time: "12:47 AM",
        amount: "200",
        type: "airtime",
        provider: "mtn",
        inner: "#f7c600",
        outer: "#f6ecce",
        image: mtn,
      },
      {
        title: "Travins Giores",
        time: "12:47 AM",
        amount: "28,000",
        type: "credit",
        inner: colors.primary,
        outer: colors.lighterPrimary,
        icon: "location-arrow",
      },
      {
        title: "Samuel Ajibola",
        time: "02:04 AM",
        amount: "4,000",
        type: "bank-transfer",
        bank: "GTB",
        inner: "#dd4f03",
        outer: "#eb9b2c",
        image: gtb,
      },
    ],
  },
];

const Transactions = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <SearchBar onPress={() => setShow(true)} />
      {show && <DatePicker show={show} date={date} onChange={onChange} />}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TransactionCard
            title={item.title}
            amount={item.amount}
            subTitle={item.time}
            type={item.type}
            inner={item.inner}
            outer={item.outer}
            image={item.image}
            icon={item.icon}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <Text style={styles.header}> {date}</Text>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              borderColor: colors.lighterGray,
              borderWidth: 1,
            }}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  header: {
    width: "100%",
    backgroundColor: colors.lighterGray,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Transactions;
