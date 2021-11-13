import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PaymentCard from "../components/PaymentCard";
import SafeArea from "../components/SafeArea";
import Text from "../components/Text";
import colors from "../config/colors";
import FlutterWaveWebView from "./FlutterWaveWebView";
import PaystackWebView from "./PaystackWebView";

const Payment = (props) => {
  const [showPaystack, setShowPaystack] = useState(false);
  const [showRave, setShowRave] = useState(false);
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.header}>Payment </Text>
          <Text style={styles.subHeader}>Choose preferred payment gateway</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <PaymentCard
            button="Use Paystack"
            gateway="paystack"
            image={require("../assets/paystack.png")}
            onPress={() => setShowPaystack(true)}
          />
          <FlutterWaveWebView
            onSuccess={(res) => setShowPaystack(false)}
            onCancel={(e) => setShowPaystack(false)}
            customButton={(props) => (
              <PaymentCard
                button="Use Flutterwave"
                gateway="Flutterwave"
                image={require("../assets/flutterwave.png")}
                buttonColor="secondary"
                onPress={() => props.onPress()}
              />
            )}
          />
        </View>
      </View>
      {showPaystack && (
        <PaystackWebView
          onSuccess={(res) => setShowPaystack(false)}
          onCancel={(e) => setShowPaystack(false)}
        />
      )}
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.secondary,
  },

  subHeader: {
    color: colors.mediumGray,
  },
  texts: {},
});

export default Payment;
