import React from "react";
import { Paystack } from "react-native-paystack-webview";
import { View } from "react-native";
import { PAYSTACK_PK } from "../config/constant";

function PaystackWebView({ onSuccess, onCancel }) {
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey={PAYSTACK_PK}
        amount={"25000.00"}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={onCancel}
        onSuccess={onSuccess}
        autoStart={true}
      />
    </View>
  );
}
export default PaystackWebView;
