import React from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";

import SafeArea from "../components/SafeArea";

const FlutterWaveWebView = ({
  onCancel,
  onPress,
  onSuccess,
  onError,
  customButton,
}) => {
  return (
    <SafeArea>
      <PayWithFlutterwave
        onRedirect={() => console.log("Redirect")}
        options={{
          tx_ref: "1234",
          authorization: "FLWPUBK-a49f8a3beaa86d93ec8f69e2f4dba36a-X",
          customer: {
            email: "myloanith@gmail.com",
            phonenumber: "09033727272",
            name: "Ajibola Samuel",
          },
          amount: 50,
          currency: "NGN",
        }}
        onPress={onPress}
        onSuccess={onSuccess}
        onCancel={onCancel}
        onError={onError}
        customButton={customButton}
      />
    </SafeArea>
  );
};

export default FlutterWaveWebView;
